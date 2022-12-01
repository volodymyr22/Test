import React from 'react';
import { View, Text } from 'react-native';
import { Comment } from '../../types';
import { styles } from './styles';

export const Card: React.FC<Comment> = React.memo(({ id, body, title, userId }) => {
  return (
    <View style={styles.main}>
      <View style={[styles.header, styles.content]}>
        <Text>Post Number: {id}</Text>
      </View>
      <View style={[styles.content, styles.contentBorder]}>
        <View style={styles.textWrapper}>
          <Text style={styles.textMb}>Title:</Text>
          <Text>{title}</Text>
        </View>
        <View>
          <Text style={styles.textMb}>Description</Text>
          <Text>{body}</Text>
        </View>
      </View>
      <View style={[styles.header, styles.content]}>
        <Text>User number: {userId}</Text>
      </View>
    </View>
  );
});
