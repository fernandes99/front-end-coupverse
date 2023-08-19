import { useState } from 'react';
import { S } from './styles';
import { Logo } from '../../components/Logo';
import { Socket } from 'socket.io-client';
import { getRandomString } from '../../utils/general';
import { Container } from '../../styles/layout';
import { useNavigate } from 'react-router-dom';
import { storage } from '../../utils/storage';

interface IWelcomePage {
    socket: Socket;
}

export const WelcomePage = ({ socket }: IWelcomePage) => {
    const navigate = useNavigate();
    const [creatingRoom, setCreatingRoom] = useState(false);
    const [roomId, setRoomId] = useState('');
    const [userName, setUserName] = useState('');

    const createRoom = () => {
        const randomString = getRandomString();

        storage.set('username', userName || 'Anônimo');
        socket.emit('connect_room', { roomId, userName });
        setRoomId(randomString);
        navigate(`/sala/${randomString}/lobby`);
    };

    const enterRoom = () => {
        storage.set('username', userName || 'Anônimo');
        socket.emit('connect_room', { roomId, userName });
        navigate(`/sala/${roomId}/lobby`);
    };

    return (
        <Container>
            <S.Content>
                <S.Info>
                    <p>Bem vindo ao</p>
                    <Logo />
                </S.Info>

                {creatingRoom ? (
                    <S.Form>
                        <input
                            placeholder='Digite seu nome'
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <button onClick={createRoom}>Criar na sala</button>
                        <a href='javascript:void(0)' onClick={() => setCreatingRoom(false)}>
                            Entre em uma sala
                        </a>
                    </S.Form>
                ) : (
                    <S.Form>
                        <input
                            placeholder='Digite seu nome'
                            onChange={(event) => setUserName(event.target.value)}
                        />
                        <input
                            placeholder='Digite o código da sala'
                            onChange={(event) => setRoomId(event.target.value)}
                        />
                        <button onClick={enterRoom}>Entrar na sala</button>
                        <a href='javascript:void(0)' onClick={() => setCreatingRoom(true)}>
                            Crie uma sala
                        </a>
                    </S.Form>
                )}
            </S.Content>
        </Container>
    );
};
