// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1035490100);
    InitializeCommonEvent(1, 9008000, 1035490101);
    InitializeCommonEvent(2, 9008000, 1035490102);
    InitializeCommonEvent(3, 9008000, 1035490103);
    InitializeCommonEvent(4, 9008000, 1035490104);
    InitializeCommonEvent(5, 9008000, 1035490220);
    InitializeCommonEvent(6, 9008000, 1035490105);
    InitializeCommonEvent(7, 9008000, 1035490106);
    InitializeCommonEvent(8, 9008000, 1035490107);
    InitializeCommonEvent(9, 9008000, 1035490108);
    InitializeCommonEvent(10, 9008000, 1035490109);
    InitializeCommonEvent(11, 9008000, 1035490110);
    InitializeCommonEvent(12, 9008000, 1035490111);
    InitializeCommonEvent(13, 9008000, 1035490112);
    InitializeCommonEvent(14, 9008000, 1035490113);
    InitializeCommonEvent(15, 9008000, 1035490114);
    InitializeCommonEvent(16, 9008000, 1035490115);
    InitializeCommonEvent(17, 9008000, 1035490116);
    InitializeCommonEvent(18, 9008000, 1035490117);
    InitializeCommonEvent(19, 9008000, 1035490118);
    InitializeCommonEvent(20, 9008000, 1035490119);
    InitializeCommonEvent(21, 9008000, 1035490120);
    InitializeCommonEvent(22, 9008000, 1035490121);
    
    InitializeEvent(0, 1035492220, 0);
    InitializeCommonEvent(0, 90005631, 1035491640, 61022);
});

$Event(1035492220, Restart, function() {
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, 1035490220, 30, 1);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1035490220, 3011, false, false, false);
    WaitFixedTimeSeconds(5);
    TriggerAISound(4020, 1035492220, TargetEntityType.Area);
    EndEvent();
});


