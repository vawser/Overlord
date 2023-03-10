// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1042400700);
    InitializeCommonEvent(1, 9008000, 1042400100);
    InitializeCommonEvent(2, 9008000, 1042400101);
    InitializeCommonEvent(3, 9008000, 1042400102);
    InitializeCommonEvent(4, 9008000, 1042400103);
    InitializeCommonEvent(5, 9008000, 1042400104);
    InitializeCommonEvent(6, 9008000, 1042400105);
    InitializeCommonEvent(7, 9008000, 1042400106);
    InitializeCommonEvent(8, 9008000, 1042400107);
    InitializeCommonEvent(9, 9008000, 1042400108);
    InitializeCommonEvent(10, 9008000, 1042400109);
    InitializeCommonEvent(11, 9008000, 1042400110);
    InitializeCommonEvent(12, 9008000, 1042400111);
    InitializeCommonEvent(13, 9008000, 1042400112);
    InitializeCommonEvent(14, 9008000, 1042400113);
    InitializeCommonEvent(15, 9008000, 1042400114);
    InitializeCommonEvent(16, 9008000, 1042400115);
    
    InitializeEvent(0, 1042402650, 710670, 1670, 9123, 69230);
    InitializeCommonEvent(0, 90005706, 1042400700, 90101, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1042400700, true);
});

$Event(1042402650, Restart, function(X0_4, X4_4, X8_4, X12_4) {
    DisableNetworkSync();
    EndIf(!PlayerIsInOwnWorld());
    EndIf(EventFlag(X0_4));
    WaitFor(
        PlayerIsInOwnWorld()
            && EventFlag(X0_4)
            && !(HasMultiplayerState(MultiplayerState.Multiplayer)
                || HasMultiplayerState(MultiplayerState.MultiplayerPending))
            && !CharacterHasSpEffect(10000, 9640));
    ShowTutorialPopup(X4_4, true, true);
    EndIf(EventFlag(X12_4));
    DirectlyGivePlayerItem(ItemType.Goods, X8_4, X0_4, 1);
    SetEventFlagID(X12_4, ON);
});

$Event(1042403700, Restart, function(X0_4) {
    SetCharacterBackreadState(X0_4, false);
    EnableCharacter(X0_4);
    ForceAnimationPlayback(X0_4, 30025, false, false, false);
});


