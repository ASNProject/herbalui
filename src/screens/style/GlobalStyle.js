'use strict';
import { StyleSheet } from "react-native";

export default StyleSheet.create(
    {
        // font size
        fs1: { fontSize: 24, },
        fs2: { fontSize: 20, },
        fs3: { fontSize: 18, },
        fs4: { fontSize: 16, },
        fs5: { fontSize: 12, },
        fs6: { fontSize: 9, },
        // margin
        mt1: { marginTop: 5 },
        mt2: { marginTop: 10 },
        mt3: { marginTop: 15 },
        mt4: { marginTop: 20 },
        mt5: { marginTop: 30 },
        // margin bottom
        mb1: { marginBottom: 5 },
        mb2: { marginBottom: 10 },
        mb3: { marginBottom: 15 },
        mb4: { marginBottom: 20 },
        mb5: { marginBottom: 30 },
        // shadow
        darkShadow: { shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.08, shadowRadius: 3, },
        primaryShadow: { shadowColor: '#0551FF', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.08, shadowRadius: 3, },
        // color
        primaryColor: { color: "#0551FF" },
        blueLightColor: { color: "#E6EDFF" },
        secondaryColor: { color: "#A0A0A0" },
        // background
        bgPrimary: { backgroundColor: "#0551FF" },
        bgBlueLight: { backgroundColor: "#E6EDFF" },
        bgSecondary: { backgroundColor: "#A0A0A0" },
    }
);