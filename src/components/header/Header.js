import { View, Text, Image } from 'react-native'
import React from 'react'
import Picture from "../../assets/pic.png"
import { style } from './HeaderStyle'
import MarqueeText from 'react-native-marquee';
export default function Header() {
    return (
        <View>
            <View style={style.container}>
                <MarqueeText
                    style={{ fontSize: 20 }}
                    speed={1}
                    marqueeOnStart={true}
                    loop={true}
                    delay={1000}
                >
                           للَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ وَعَلٰى آلِ مُحَمَّدٍ ❁ كَمَا صَلَّيْتَ عَلٰى إِبْرَاهِيْمَ وَعَلىٰ آلِ إِبْرَاهِيْمَ ❁ إنَّكَ حَمِيْدٌ مَجِيْدٌ ❁ اللَّهُمَّ بَارِكْ عَلَىٰ مُحَمَّدٍ وَّعَلٰى آلِ مُحَمَّدٍ ❁ كَمَا بَارَكْتَ عَلَىٰ إِبْرَاهِيْمَ وَعَلَىٰ آلِ إِبْرَاهِيْمَ ❁ إنَّكَ حَمِيْدٌ مَجِيْدٌ

                                                       
                           
                </MarqueeText>
            </View>
            <Image style={style.image} source={Picture} />

        </View>
    )
}