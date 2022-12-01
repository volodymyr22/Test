import React, {useCallback} from 'react';
import {Image, StatusBar, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import goBackIcon from '../../assets/icons/go-back.png';

import {GRADIENT} from "../../colors";
import {styles} from "./styles";
import {useNavigation} from "@react-navigation/native";

interface Props {
    title: string;
}

export const Header: React.FC<Props> = React.memo(
    ({
         title,
     }) => {
        const navigation = useNavigation();
        const goBack = useCallback(() => navigation.goBack(), [navigation])
        const icon = Image.resolveAssetSource(goBackIcon).uri;
        return (
            <>
                <StatusBar barStyle="light-content" />
                <LinearGradient
                    colors={[GRADIENT.from, GRADIENT.to]}
                    style={styles.header}
                >
                    <TouchableOpacity onPress={goBack} style={styles.imageWrapper}>
                        <Image style={styles.image} source={{ uri: icon }}/>
                    </TouchableOpacity>
                  <Text style={styles.title}>
                      {title}
                  </Text>
                </LinearGradient>
            </>
        );
    },
);


