import React, {useState} from 'react';
import { Separator } from './styles';
import {Card} from '../../components/molecules/Card';
import {useGlobalContext} from '../../hooks';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from '../../components/templates/BottomSheet';
import { ListRenderItemInfo } from 'react-native';
import { Product } from '../../context/types';
import {Details} from '../../components/molecules/Details';
import { Header } from '../../components/molecules/Header';

export const Home: React.FC = () => {

  const {products} = useGlobalContext();

  const[details, setDetails] = useState<string>('');
  const [visible, setVislble] = useState<boolean>(false);

  const handleOpenBottonsheet = (description): void => {
    setDetails(description);
    setVislble(true);
  }


  return (
    <>
    <Header />
    <FlatList
      data={products}
      renderItem={({item}: ListRenderItemInfo<Product>) => <Card item={item} onPress={() => handleOpenBottonsheet(item.description)} />}
      keyExtractor={item => item.id}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={Separator}
      bounces={false}
      contentContainerStyle={{
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        paddingTop: 30,
      }}
    />
    <BottomSheet isVisible={visible} onClose={() => setVislble(false)}>
      <Details description={details} />
    </BottomSheet>
    </>
  )
}
