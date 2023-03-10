// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(1045352200, Restart, function() {
    InitializeCommonEvent(0, 9008000, 1045350100);
    InitializeCommonEvent(1, 9008000, 1045350101);
    InitializeCommonEvent(2, 9008000, 1045350102);
    InitializeCommonEvent(3, 9008000, 1045350103);
    InitializeCommonEvent(4, 9008000, 1045350104);
    InitializeCommonEvent(5, 9008000, 1045350105);
    InitializeCommonEvent(6, 9008000, 1045350106);
    InitializeCommonEvent(7, 9008000, 1045350107);
    InitializeCommonEvent(8, 9008000, 1045350108);
    InitializeCommonEvent(9, 9008000, 1045350109);
    InitializeCommonEvent(10, 9008000, 1045350110);
    InitializeCommonEvent(11, 9008000, 1045350111);
    InitializeCommonEvent(12, 9008000, 1045350112);
    InitializeCommonEvent(13, 9008000, 1045350113);
    InitializeCommonEvent(14, 9008000, 1045350114);
    InitializeCommonEvent(15, 9008000, 1045350115);
    InitializeCommonEvent(16, 9008000, 1045350116);
    InitializeCommonEvent(17, 9008000, 1045350117);
    InitializeCommonEvent(18, 9008000, 1045350118);
    InitializeCommonEvent(19, 9008000, 1045350119);
    InitializeCommonEvent(20, 9008000, 1045350120);
    InitializeCommonEvent(21, 9008000, 1045350121);
    InitializeCommonEvent(22, 9008000, 1045350122);
    InitializeCommonEvent(23, 9008000, 1045350123);
    InitializeCommonEvent(24, 9008000, 1045350124);
    InitializeCommonEvent(25, 9008000, 1045350125);
    InitializeCommonEvent(26, 9008000, 1045350126);
    
    EndIf(ThisEventSlot());
    chrSp = (CharacterType(10000, TargetType.BlackPhantom) && CharacterHasSpEffect(10000, 3710))
        || CharacterType(10000, TargetType.Alive)
        || CharacterType(10000, TargetType.GrayPhantom)
        || CharacterType(10000, TargetType.WhitePhantom);
    area = EntityInRadiusOfEntity(10000, 1045350200, 30, 1);
    WaitFor(area && chrSp);
    SetNetworkconnectedThisEventSlot(ON);
    ForceAnimationPlayback(1045350200, 3011, false, false, false);
    EndEvent();
});


