// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    
    InitializeCommonEvent(0, 9008000, 1051390950);
    InitializeCommonEvent(1, 9008000, 1051390100);
    InitializeCommonEvent(2, 9008000, 1051390350);
    InitializeCommonEvent(3, 9008000, 1051390300);
    InitializeCommonEvent(4, 9008000, 1051390301);
    InitializeCommonEvent(5, 9008000, 1051390302);
    InitializeCommonEvent(6, 9008000, 1051390250);
    InitializeCommonEvent(7, 9008000, 1051390251);
    InitializeCommonEvent(8, 9008000, 1051390280);
    InitializeCommonEvent(9, 9008000, 1051390101);
    InitializeCommonEvent(10, 9008000, 1051390102);
    InitializeCommonEvent(11, 9008000, 1051390103);
    InitializeCommonEvent(12, 9008000, 1051390104);
    InitializeCommonEvent(13, 9008000, 1051390257);
    InitializeCommonEvent(14, 9008000, 1051390105);
    InitializeCommonEvent(15, 9008000, 1051390106);
    InitializeCommonEvent(16, 9008000, 1051390107);
    InitializeCommonEvent(17, 9008000, 1051390108);
    InitializeCommonEvent(18, 9008000, 1051390204);
    InitializeCommonEvent(19, 9008000, 1051390400);
    InitializeCommonEvent(20, 9008000, 1051390402);
    InitializeCommonEvent(21, 9008000, 1051390431);
    InitializeCommonEvent(22, 9008000, 1051390432);
    InitializeCommonEvent(23, 9008000, 1051390433);
    InitializeCommonEvent(24, 9008000, 1051390434);
    InitializeCommonEvent(25, 9008000, 1051390435);
    InitializeCommonEvent(26, 9008000, 1051390436);
    InitializeCommonEvent(27, 9008000, 1051390437);
    InitializeCommonEvent(28, 9008000, 1051390438);
    
    
    RegisterBonfire(1051390000, 1051391950, 0, 0, 0, 5);
    InitializeCommonEvent(0, 90005683, 62412, 1051391684, 209, 78494, 78494);
    InitializeCommonEvent(0, 900005610, 1051391650, 100, 800, 0);
    InitializeCommonEvent(0, 90005250, 1051390204, 1051392204, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390250, 1051392280, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390251, 1051392251, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390280, 1051392280, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390400, 1051392400, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390402, 1051392400, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390431, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390432, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390433, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390434, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390435, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390436, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390437, 1051392401, 0, -1);
    InitializeCommonEvent(0, 90005250, 1051390438, 1051392401, 0, -1);
    InitializeEvent(0, 1051392200, 1051390400);
    InitializeEvent(1, 1051392200, 1051390402);
    InitializeEvent(2, 1051392200, 1051390431);
    InitializeEvent(3, 1051392200, 1051390432);
    InitializeEvent(4, 1051392200, 1051390433);
    InitializeEvent(5, 1051392200, 1051390434);
    InitializeEvent(6, 1051392200, 1051390435);
    InitializeEvent(7, 1051392200, 1051390436);
    InitializeEvent(8, 1051392200, 1051390437);
    InitializeEvent(9, 1051392200, 1051390438);
    InitializeEvent(0, 1051392580, 1051390580, 1051390851, 1051391580);
    InitializeEvent(1, 1051392580, 1051390582, 1051390853, 1051391582);
    InitializeEvent(2, 1051392580, 1051390584, 1051390855, 1051391584);
});

$Event(1051392200, Restart, function(X0_4) {
    SetSpEffect(X0_4, 8081);
    WaitFor(CharacterAIState(X0_4, AIStateType.Combat));
    ClearSpEffect(X0_4, 8081);
});

$Event(1051392580, Default, function(X0_4, X4_4, X8_4) {
    RegisterLadder(X0_4, X4_4, X8_4);
});


