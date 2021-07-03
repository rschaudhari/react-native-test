
import React,{useEffect} from 'react';
import { View,Text, StyleSheet, SafeAreaView } from "react-native";


export default function ListDescription ({route}){
    
useEffect(() => {
    
    console.log("data",route.params.paramKey)
}, []);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
            <Text style={styles.text_header}>Test For Mb</Text>
           </View>
           <View style={styles.footer}>
                <Text style={styles.title_footer}>User Info.</Text>
                <View style={styles.action}>
                    <Text style={styles.text_footer}>{`Job Profile : ${route.params.paramKey.description}`}</Text>
                    <Text style={styles.text_footer}>{`Country :  ${route.params.paramKey.address}`}</Text>
                    <Text style={styles.text_footer}>{`Salary :  ${route.params.paramKey.salary}`}</Text>

                </View>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50,    
      },
      container: {
        flex: 1,
        backgroundColor: '#FF8000'
    },
      header: {
        flex: 1,
        justifyContent: 'flex-end',
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
    text_header: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginHorizontal:30,
    },
    text_footer: {
        color: '#FF8000',
        marginTop: 10,
        fontSize:14,
        flexDirection:'row'
    },
    title_footer: {
        color: '#FF8000',
        fontSize: 18,
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    action: {
        flexDirection: 'column',
        marginTop: 10,
    },
})