import styled from 'styled-components';

export const S = {
    Content: styled.div`
        background-color: #ffffff;
        padding: 52px;
        border-radius: 16px;
        min-width: 380px;

        > p {
            margin: 24px 0 12px;
        }

        button {
            background-color: #fed262;
            height: 48px;
            width: 100%;
            color: #4d401f;
            border-radius: 6px;
            border: unset;
            font-size: 16px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.3s;
            margin-top: 8px;

            &:hover {
                background-color: #f1c552;
            }
        }
    `,
    UserList: styled.ul`
        display: flex;
        flex-direction: column;
        gap: 24px;
        border: 1px solid;
        padding: 16px;
        border: 1px solid #e8e8e8;
        border-radius: 6px;

        li {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    `,
    Tag: styled.div<{ ready: boolean }>`
        border: 1px solid ${(props) => (props.ready ? '#2EA033' : '#E00D00')};
        border-radius: 4px;
        color: ${(props) => (props.ready ? '#2EA033' : '#E00D00')};
        padding: 4px 8px;
        font-size: 14px;
    `,
    SmallText: styled.p`
        text-align: center;
        color: #707070;
        font-size: 14px;
    `
};
