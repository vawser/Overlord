// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1046380101);
    InitializeCommonEvent(1, 9008000, 1046380950);
    InitializeCommonEvent(2, 9008000, 1046380100);
    InitializeCommonEvent(3, 9008000, 1046380102);
    InitializeCommonEvent(4, 9008000, 1046380103);
    InitializeCommonEvent(5, 9008000, 1046380104);
    InitializeCommonEvent(6, 9008000, 1046380105);
    InitializeCommonEvent(7, 9008000, 1046380106);
    InitializeCommonEvent(8, 9008000, 1046380107);
    InitializeCommonEvent(9, 9008000, 1046380108);
    InitializeCommonEvent(10, 9008000, 1046380109);
    InitializeCommonEvent(11, 9008000, 1046380110);
    InitializeCommonEvent(12, 9008000, 1046380111);
    InitializeCommonEvent(13, 9008000, 1046380112);
    InitializeCommonEvent(14, 9008000, 1046380113);
    InitializeCommonEvent(15, 9008000, 1046380114);
    InitializeCommonEvent(16, 9008000, 1046380115);
    InitializeCommonEvent(17, 9008000, 1046380116);
    InitializeCommonEvent(18, 9008000, 1046380117);
    InitializeCommonEvent(19, 9008000, 1046380118);
    InitializeCommonEvent(20, 9008000, 1046380119);
    InitializeCommonEvent(21, 9008000, 1046380120);
    InitializeCommonEvent(22, 9008000, 1046380121);
    InitializeCommonEvent(23, 9008000, 1046380122);
    InitializeCommonEvent(24, 9008000, 1046380123);
    InitializeCommonEvent(25, 9008000, 1046380124);
    InitializeCommonEvent(26, 9008000, 1046380125);
    InitializeCommonEvent(27, 9008000, 1046380126);
    InitializeCommonEvent(28, 9008000, 1046380127);
    InitializeCommonEvent(29, 9008000, 1046380128);
    InitializeCommonEvent(30, 9008000, 1046380129);
    InitializeCommonEvent(31, 9008000, 1046380130);
    InitializeCommonEvent(32, 9008000, 1046380131);
    InitializeCommonEvent(33, 9008000, 1046380132);
    InitializeCommonEvent(34, 9008000, 1046380133);
    InitializeCommonEvent(35, 9008000, 1046380134);
    InitializeCommonEvent(36, 9008000, 1046380135);
    InitializeCommonEvent(37, 9008000, 1046380136);
    InitializeCommonEvent(38, 9008000, 1046380137);
    InitializeCommonEvent(39, 9008000, 1046380138);
    InitializeCommonEvent(40, 9008000, 1046380139);
    InitializeCommonEvent(41, 9008000, 1046380140);
    InitializeCommonEvent(42, 9008000, 1046380141);
    InitializeCommonEvent(43, 9008000, 1046380142);
    InitializeCommonEvent(44, 9008000, 1046380143);
    InitializeCommonEvent(45, 9008000, 1046380144);
    InitializeCommonEvent(46, 9008000, 1046380145);
    InitializeCommonEvent(47, 9008000, 1046380146);
    InitializeCommonEvent(48, 9008000, 1046380147);
    InitializeCommonEvent(49, 9008000, 1046380148);
    InitializeCommonEvent(50, 9008000, 1046380149);
    InitializeCommonEvent(51, 9008000, 1046380150);
    InitializeCommonEvent(52, 9008000, 1046380151);
    InitializeCommonEvent(53, 9008000, 1046380152);
    
    RegisterBonfire(1046380000, 1046381950, 0, 0, 0, 5);
    InitializeEvent(0, 1046380280, 0);
    InitializeEvent(0, 1046382210, 0);
    InitializeEvent(0, 1046380670, 1520, 710520, 1770, 710770, 69090, 69370);
    InitializeEvent(0, 1046380671, 710590, 1590, 9115, 69150);
    InitializeCommonEvent(0, 90005771, 1046380950, 1046382701);
});

$Event(1046380280, Default, function() {
    DisableAsset(1046381280);
});

$Event(1046382210, Restart, function() {
    ForceCharacterDeath(1046385210, false);
});

$Event(1046380670, Restart, function(X0_4, X4_4, X8_4, X12_4, X16_4, X20_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(
        PlayerIsInOwnWorld()
            && PlayerHasItem(ItemType.Goods, 130)
            && PlayerInMap(60, 46, 38, 0)
            && !PlayerHasItem(ItemType.Goods, 9109)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 100690)
            && !CharacterHasSpEffect(10000, 9640));
    SetEventFlagID(X4_4, ON);
    SetEventFlagID(X12_4, ON);
    ShowTutorialPopup(X0_4, true, true);
    WaitFixedTimeSeconds(1);
    ShowTutorialPopup(X8_4, true, true);
    EndIf(EventFlag(X16_4));
    DirectlyGivePlayerItem(ItemType.Goods, 9109, X4_4, 1);
    DirectlyGivePlayerItem(ItemType.Goods, 9137, X12_4, 1);
    SetEventFlagID(X16_4, ON);
    SetEventFlagID(X20_4, ON);
});

$Event(1046380671, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending)));
    ShowTutorialPopup(X4_4, true, true);
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    EndIf(EventFlag(X12_4));
    SetEventFlagID(X12_4, ON);
});


