import React from 'react';
import { Image } from 'react-native';
import { styles } from './styles';

type Props = {
    guildId: string;
    iconId: string | null;
}

export function GuildIcon({ guildId, iconId }: Props) {
    const uri = 'https://gamerssuffice.com/wp-content/uploads/2019/11/How-to-add-bots-to-discord-500x405.jpg';

    return (
        <Image
            source={{ uri }}
            style={styles.image}
            resizeMode="cover" //Imagem se ajusta quando não tiver numa proporção ideal
        />
    );
}