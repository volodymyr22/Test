import React, { ReactElement, useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Card } from '../../components/Card/Card';
import { FlatList, View } from 'react-native';
import { styles } from './styles';
import { CommentApi } from '../../services/api/Comment';
import { useQuery } from 'react-query';
import { useNavigation, useRoute } from '@react-navigation/native';
import { QueryKey } from '../../types';
import { Loader } from '../../components/Loader/Loader';

export const DataScreen: React.FC = React.memo(() => {
  const route = useRoute();
  const navigation = useNavigation();
  const { minValue, maxValue } = route.params as { minValue: number; maxValue: number };
  const [max, setMax] = useState(maxValue);
  const [isLoad, setLoad] = useState(true);
  const { isLoading, data, isError } = useQuery([QueryKey.POST, minValue, max], () =>
    CommentApi.getComments({ minValue, maxValue: max }),
  );

  const list = useMemo(() => {
    if (data && data.data) {
      return data.data;
    }
    return [];
  }, [data]);

  useEffect(() => {
    if (isError) {
      navigation.goBack();
    }
  }, [isError]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  const keyExtractor = (item: any): string => `${item.id}`;
  const renderItem = ({ item }: { item: any }): ReactElement => <Card {...item} />;

  const onLoadMore = useCallback(() => {
    if (!isLoading && max < 500) {
      if (max + 10 > 500) {
        setMax(500);
      } else {
        setMax(prevState => prevState + 10);
      }
    }
  }, [max, isLoading]);

  if (isLoad) {
    return <Loader />;
  }

  return (
    <View>
      <Header title="Data screen" />
      <FlatList
        data={list}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        contentContainerStyle={styles.main}
        onEndReached={onLoadMore}
      />
    </View>
  );
});
