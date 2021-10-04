import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
} from 'react-native';

import IllustrationImg from '../../../assets/illustration.png'
import { ButtonIcon } from '../../components/Buttonicon';
import { styles } from './styles';

export function SignIn() {
    const [text, setText] = useState("");

    return (
            <View style={styles.container}>
                <Image
                    source={IllustrationImg}
                    style={styles.image}
                />

                <View style={styles.content}>
                    <Text style={styles.title}>
                        Conecte-se {`\n`}
                        e Organize {`\n`}
                        suas jogatinas
                    </Text>

                    <Text style={styles.subtitle}>
                        Crie grupos para jogar seus games {`\n`}
                        favoritos com seus amigos
                    </Text>

                    <ButtonIcon title="Entrar com Discord" />

                </View>
            </View>
    );
}