// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1035520201);
    InitializeCommonEvent(1, 9008000, 1035520202);
    InitializeCommonEvent(2, 9008000, 1035520200);
    InitializeCommonEvent(3, 9008000, 1035520100);
    
    InitializeEvent(0, 1035522200, 1035520200);
    InitializeEvent(1, 1035522200, 1035520201);
    InitializeEvent(2, 1035522200, 1035520202);
});

$Event(1035522200, Restart, function(X0_4) {
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ForceAnimationPlayback(X0_4, 3015, false, false, true);
    EndEvent();
});


