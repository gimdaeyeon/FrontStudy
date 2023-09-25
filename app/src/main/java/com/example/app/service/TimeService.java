package com.example.app.service;

import com.example.app.mapper.TimeMapper;
import com.zaxxer.hikari.util.ClockSource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class TimeService {
    private final TimeMapper timeMapper;

    public String selectTime(){
        return Optional.ofNullable(timeMapper.getTime())
                .orElseThrow(()-> {
                    throw new IllegalArgumentException("시간 가져오기 실패");
                });
    }


}
