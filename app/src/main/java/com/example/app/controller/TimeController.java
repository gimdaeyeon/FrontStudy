package com.example.app.controller;

import com.example.app.service.TimeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/*")
public class TimeController {
    private final TimeService timeService;

    @GetMapping("/time")
    public String getTime(){
        System.out.println(timeService.selectTime());
        return timeService.selectTime();
    }

}
