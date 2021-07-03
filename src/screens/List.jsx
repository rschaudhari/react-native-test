import {Menu, MenuGroup, MenuItem, Modal } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { metadata } from './listMetadata';



export default function List({ navigation }) {
    const [selectedIndex, setSelectedIndex] = useState();


    useEffect(() => {
        console.log("metadata", metadata)
    }, []);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.text_header}>React Native Test by :</Text>
                    <Text style={styles.text_header}>Rahul Chaudhari </Text>
                </View>
                <View style={styles.footer}>
                    <Menu
                        style={styles.footer}
                        selectedIndex={selectedIndex}
                        onSelect={index => setSelectedIndex(index)}>
                        {metadata.map((value, index) => (
                            <MenuGroup
                                style={styles.action}
                                title={value.value} >
                                {metadata[index].titles.map((keyValue, index) => (
                                    <MenuItem title={keyValue.name}  onPress={() =>
                                         navigation.navigate('ListDescription', { paramKey: keyValue})} />
                                ))}
                            </MenuGroup>
                        ))}
                    
                    </Menu>
                </View>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,
        backgroundColor: '#fff'
    },
    container: {
        flex: 1,
        backgroundColor: '#FF8000'
    },
    header: {
        flex: 2,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,

    },
    header_card: {
        marginVertical: 20,
    },
    card_text: {
        color: '#ff8000',
        fontWeight: '400',
        fontSize: 20,
    },
    text_header: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
    },
    text_footer: {
        color: '#FF8000',
        fontSize: 18,
        marginTop: 10
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a'
    },
    button: {
        alignItems: "center",
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10

    },
    link: {
        textAlign: 'right',
        marginRight: 20,
        color: '#FF8000',
        marginTop: 50
    },
    signUpLink: {
        textAlign: 'left',
        marginRight: 20,
        color: '#FF8000',
        marginTop: -20

    },
    textSign: {
        color: '#ff8000',
        fontSize: 18,
        fontWeight: 'bold'
    }
});
