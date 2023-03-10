// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1048360700);
    InitializeCommonEvent(1, 9008000, 1048360950);
    InitializeCommonEvent(2, 9008000, 1048360201);
    InitializeCommonEvent(3, 9008000, 1048360100);
    InitializeCommonEvent(4, 9008000, 1048360101);
    InitializeCommonEvent(5, 9008000, 1048360102);
    InitializeCommonEvent(6, 9008000, 1048360103);
    InitializeCommonEvent(7, 9008000, 1048360104);
    InitializeCommonEvent(8, 9008000, 1048360105);
    InitializeCommonEvent(9, 9008000, 1048360106);
    InitializeCommonEvent(10, 9008000, 1048360107);
    InitializeCommonEvent(11, 9008000, 1048360108);
    InitializeCommonEvent(12, 9008000, 1048360109);
    InitializeCommonEvent(13, 9008000, 1048360110);
    InitializeCommonEvent(14, 9008000, 1048360111);
    InitializeCommonEvent(15, 9008000, 1048360112);
    InitializeCommonEvent(16, 9008000, 1048360113);
    InitializeCommonEvent(17, 9008000, 1048360114);
    InitializeCommonEvent(18, 9008000, 1048360115);
    
    RegisterBonfire(1048360000, 1048361950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005100, 76458, 76404, 1048361980, 77410, 1, 78410, 78411, 78412, 78413, 78414, 78415, 78416, 78417, 78418, 78419);
    InitializeCommonEvent(0, 90005250, 1048360201, 1048362201, 0, -1);
    InitializeEvent(0, 1048360700, 1048360700);
    InitializeEvent(0, 1048360701, 0);
});

$Event(1048360700, Restart, function(X0_4) {
    DisableCharacterGravity(X0_4);
    DisableCharacterCollision(X0_4);
});

$Event(1048360701, Restart, function() {
    EndIf(!PlayerIsInOwnWorld());
    WaitFor(CharacterHasSpEffect(10000, 9611) && !CharacterHasSpEffect(10000, 9612));
    ForceAnimationPlayback(10000, 60510, false, false, false);
    WaitFixedTimeSeconds(0.2);
    RestartEvent();
});


