// src/components/Title.tsx

import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';

type TitleProps = TextProps & {
  children: React.ReactNode;
};

export default function Title({ children, style, ...rest }: TitleProps) {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 33,
    fontWeight: 'bold',
    fontFamily: 'MontserratAlternates_700Bold',
    color: 'white',
    marginBottom: 40,
    // textAlign: 'center',
  },
});
