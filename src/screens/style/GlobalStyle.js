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
        // margin top
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
        // margin right
        mr1: { marginRight: 5 },
        mr2: { marginRight: 10 },
        mr3: { marginRight: 15 },
        mr4: { marginRight: 20 },
        mr5: { marginRight: 30 },
        // margin left
        ml1: { marginLeft: 5 },
        ml2: { marginLeft: 10 },
        ml3: { marginLeft: 15 },
        ml4: { marginLeft: 20 },
        ml5: { marginLeft: 30 },
        // padding top
        pt1: { paddingTop: 5 },
        pt2: { paddingTop: 10 },
        pt3: { paddingTop: 15 },
        pt4: { paddingTop: 20 },
        pt5: { paddingTop: 30 },
        // padding left
        pl1: { paddingLeft: 5 },
        pl2: { paddingLeft: 10 },
        pl3: { paddingLeft: 15 },
        pl4: { paddingLeft: 20 },
        pl5: { paddingLeft: 30 },
        // shadow
        darkShadow: { shadowColor: '#171717', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.05, shadowRadius: 20, },
        primaryShadow: { shadowColor: '#00A6A6', shadowOffset: { width: -2, height: 4 }, shadowOpacity: 0.08, shadowRadius: 3, },
        // color
        whiteColor: { color: "#fff" },
        primaryColor: { color: "#00A6A6" },
        blueLightColor: { color: "#E6EDFF" },
        secondaryColor: { color: "#A0A0A0" },
        // background
        bgPrimary: { backgroundColor: "#00A6A6" },
        bgBlueLight: { backgroundColor: "#E6EDFF" },
        bgSecondary: { backgroundColor: "#A0A0A0" },
        //
        container: { flex: 1, paddingHorizontal: 25, backgroundColor: "#fff" },
        // layout
        flexColumn: { flexDirection: "column" },
        flexRow: { flexDirection: "row" },
        justifyContentCenter: { justifyContent: "center" },
        alignItemsCenter: { alignItems: "center" },
        justifySpaceBetween: { justifyContent: "space-between" },
        flexWrap: { flexWrap: "wrap" },
        // font size
        fs1: { fontSize: 24, fontFamily: "Poppins" },
        fs2: { fontSize: 20, fontFamily: "Poppins" },
        fs3: { fontSize: 18, fontFamily: "Poppins" },
        fs4: { fontSize: 16, fontFamily: "Poppins" },
        fs5: { fontSize: 12, fontFamily: "Poppins" },
        fs6: { fontSize: 9, fontFamily: "Poppins" },
        // font weight
        fwLight: { fontWeight: "300" },
        fwRegular: { fontWeight: "400" },
        fwMedium: { fontWeight: "500" },
        fwBold: { fontWeight: "600" },
    }
);