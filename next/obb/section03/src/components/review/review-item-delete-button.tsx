'use client';

import {useActionState, useEffect, useRef} from "react";
import {deleteReviewAction} from "@/actions/delete-review.action";
import style from './review-item-delete-button.module.css'

export default function ReviewItemDeleteButton({reviewId, bookId}: { reviewId: number, bookId: number }) {

    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction, isPending] = useActionState(deleteReviewAction, null);

    useEffect(() => {
        if(state&&!state.status){
            alert(state.error);
        }
    }, [state]);

    return (
        <form action={formAction} ref={formRef}>
            <input name="reviewId" value={reviewId} type="hidden"/>
            <input name="bookId" value={bookId} type="hidden"/>
            {isPending ? (
                <div>...</div>
            ) : (
                <div className={style.delete_btn} onClick={() => formRef.current?.requestSubmit()}>
                    삭제하기
                </div>
            )}

        </form>
    );
}