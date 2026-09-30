import { useRef } from 'react';
import { Button, Text, View } from 'react-native';

import { TrueSheet } from '@lodev09/react-native-true-sheet';
import { router } from 'expo-router';

export default function Home() {
  const sheet = useRef<TrueSheet>(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <Text>1. Present the sheet. 2. Push Details from inside it.</Text>
      <Button title="Present sheet" onPress={() => sheet.current?.present()} />

      <TrueSheet ref={sheet} detents={['auto']}>
        <View style={{ padding: 24, gap: 16 }}>
          <Text>The sheet should hide when Details is pushed.</Text>
          <Button title="Push Details" onPress={() => router.push('/details')} />
        </View>
      </TrueSheet>
    </View>
  );
}
