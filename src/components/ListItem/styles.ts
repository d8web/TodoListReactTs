import styled from "styled-components";

type ContainerProps = {
    done: boolean
}

export const Container = styled.div(({ done }: ContainerProps) => (
    `
        display: flex;
        background-color: #20212c;
        padding: 10px;
        border-radius: 10px;
        margin: 10px 0px;
        align-items: center;

        label {
            color: #ccc;
            font-size: 18px;
            text-decoration: ${done ? 'line-through' : 'initial'};
        }

        input {
            width: 20px;
            height: 20px;
            margin-right: 5px;
        }
    `
))