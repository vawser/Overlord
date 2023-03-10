// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\m60.emevd N:\GR\data\Param\event\common_macro.emevd     
// @linked    [0,82,148]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1035510100);
    InitializeCommonEvent(1, 9008000, 1035510101);
    InitializeCommonEvent(2, 9008000, 1035510102);
    InitializeCommonEvent(3, 9008000, 1035510103);
    InitializeCommonEvent(4, 9008000, 1035510104);
    InitializeCommonEvent(5, 9008000, 1035510105);
    InitializeCommonEvent(6, 9008000, 1035510106);
    InitializeCommonEvent(7, 9008000, 1035510107);
    InitializeCommonEvent(8, 9008000, 1035510108);
    InitializeCommonEvent(9, 9008000, 1035510109);
    InitializeCommonEvent(10, 9008000, 1035510110);
    InitializeCommonEvent(11, 9008000, 1035510111);
    InitializeCommonEvent(12, 9008000, 1035510112);
    InitializeCommonEvent(13, 9008000, 1035510113);
    InitializeCommonEvent(14, 9008000, 1035510114);
    InitializeCommonEvent(15, 9008000, 1035510115);
    InitializeCommonEvent(16, 9008000, 1035510116);
    InitializeCommonEvent(17, 9008000, 1035510117);
    InitializeCommonEvent(18, 9008000, 1035510118);
    InitializeCommonEvent(19, 9008000, 1035510119);
    InitializeCommonEvent(20, 9008000, 1035510120);
    InitializeCommonEvent(21, 9008000, 1035510121);
    InitializeCommonEvent(22, 9008000, 1035510122);
    InitializeCommonEvent(23, 9008000, 1035510123);
    InitializeCommonEvent(24, 9008000, 1035510124);
    InitializeCommonEvent(25, 9008000, 1035510125);
    InitializeCommonEvent(26, 9008000, 1035510126);
    InitializeCommonEvent(27, 9008000, 1035510127);
    InitializeCommonEvent(28, 9008000, 1035510128);
    InitializeCommonEvent(29, 9008000, 1035510129);
    InitializeCommonEvent(30, 9008000, 1035510130);
    InitializeCommonEvent(31, 9008000, 1035510131);
    InitializeCommonEvent(32, 9008000, 1035510132);
    
    InitializeCommonEvent(0, 900005610, 1035511650, 100, 800, 0);
});

$Event(1035512210, Default, function() {
    WaitFor(
        (CharacterHasSpEffect(10000, 415) && EntityInRadiusOfEntity(1035510200, 10000, 6, 1))
            || EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1));
    EnableCharacterHPBarDisplay(1035510200);
    EnableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14501);
    SetSpEffect(1035510200, 14502);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1035512220, Default, function() {
    WaitFor(
        (!CharacterHasSpEffect(10000, 415)
            || !EntityInRadiusOfEntity(1035510200, 10000, 6, 1)
            || !EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1))
            && !CharacterHasSpEffect(1035510200, 14503));
    DisableCharacterHPBarDisplay(1035510200);
    DisableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14500);
    WaitFixedTimeFrames(1);
    RestartEvent();
});

$Event(1035512211, Restart, function() {
    if ((CharacterHasSpEffect(10000, 415) && EntityInRadiusOfEntity(1035510200, 10000, 6, 1))
        || EntityInRadiusOfEntity(1035510200, 1035511200, 6, 1)) {
        EnableCharacterHPBarDisplay(1035510200);
        EnableLockOnPoint(1035510200, 220);
        SetSpEffect(1035510200, 14501);
        SetSpEffect(1035510200, 14502);
        WaitFixedTimeFrames(1);
        RestartEvent();
    }
L0:
    DisableCharacterHPBarDisplay(1035510200);
    DisableLockOnPoint(1035510200, 220);
    SetSpEffect(1035510200, 14500);
    WaitFixedTimeFrames(1);
    RestartEvent();
});


