import styled from 'styled-components';

export const S = {
    Container: styled.div`
        background-color: #354c36;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    `,
    Content: styled.div`
        background-color: #ffffff;
        padding: 52px;
        border-radius: 16px;
    `,
    Info: styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;

        p {
            color: #232423;
            font-size: 19px;
        }
    `,
    Form: styled.div`
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 24px;

        input {
            border-radius: 6px;
            border: 1px solid #e8e8e8;
            min-width: 350px;
            height: 48px;
            font-size: 16px;
            padding: 0 16px;
            transition: all 0.3s;

            &:hover {
                border-color: #cdcdcd;
            }
        }

        button {
            background-color: #fed262;
            height: 48px;
            color: #4d401f;
            border-radius: 6px;
            border: unset;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
                background-color: #f1c552;
            }
        }

        a {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            height: 48px;
            width: 100%;
            border-radius: 6px;
            color: #707070;
            text-decoration: unset;
            transition: all 0.3s;

            &:hover {
                background-color: #e8e8e8;
            }
        }
    `
};
