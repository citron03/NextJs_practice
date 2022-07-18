import React from 'react';
import { useRouter } from 'next/router';

const Dynamic = () => {
    const router = useRouter();
    const { id } = router.query;
    console.log(router);
    return (
        <div>
            <h1>현재 페이지는 {id}번 입니다.</h1>
        </div>
    );
};

export default Dynamic;