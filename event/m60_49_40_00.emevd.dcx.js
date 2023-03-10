// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd        
// @linked    [0]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1049400700);
    InitializeCommonEvent(1, 9008000, 1049400390);
    InitializeCommonEvent(2, 9008000, 1049400391);
    InitializeCommonEvent(3, 9008000, 1049400392);
    InitializeCommonEvent(4, 9008000, 1049400393);
    InitializeCommonEvent(5, 9008000, 1049400394);
    InitializeCommonEvent(6, 9008000, 1049400100);
    InitializeCommonEvent(7, 9008000, 1049400101);
    InitializeCommonEvent(8, 9008000, 1049400102);
    InitializeCommonEvent(9, 9008000, 1049400103);
    InitializeCommonEvent(10, 9008000, 1049400104);
    InitializeCommonEvent(11, 9008000, 1049400105);
    InitializeCommonEvent(12, 9008000, 1049400381);
    
    InitializeCommonEvent(0, 90005560, 1049400600, 1049401600, 0);
    InitializeCommonEvent(0, 90005251, 1049400390, 0, 0, -1);
    InitializeCommonEvent(0, 90005251, 1049400391, 0, 0, -1);
    InitializeCommonEvent(0, 90005251, 1049400392, 0, 0, -1);
    InitializeCommonEvent(0, 90005251, 1049400393, 0, 0, -1);
    InitializeCommonEvent(0, 90005251, 1049400394, 0, 0, -1);
    InitializeEvent(0, 1049402390, 0);
    InitializeCommonEvent(0, 90005250, 1049400381, 1049402381, 0, -1);
    InitializeCommonEvent(0, 900005610, 1049401610, 100, 800, 0);
    InitializeEvent(0, 1049402650, 0);
    InitializeEvent(0, 1049400500, 0);
    InitializeCommonEvent(0, 90005511, 1049400560, 1049404550, 1049405560, 257013, 0);
    InitializeCommonEvent(0, 90005512, 1049400560, 1049402550, 1049402551);
    InitializeCommonEvent(0, 90005640, 1049400540, 1049401540);
    InitializeCommonEvent(0, 90005706, 1049400700, 90100, 0);
});

$Event(50, Default, function() {
    SetCharacterBackreadState(1049400700, true);
    InitializeEvent(0, 1046400510, 0);
});

$Event(1049402390, Restart, function() {
    ForceCharacterDeath(1049400390, false);
    ForceCharacterDeath(1049400391, false);
    ForceCharacterDeath(1049400392, false);
    ForceCharacterDeath(1049400393, false);
    ForceCharacterDeath(1049400394, false);
});

$Event(1046400510, Default, function() {
    EndIf(ThisEventSlot());
});

$Event(1049400500, Restart, function() {
    EndIf(EventFlag(12020570));
    WaitFixedTimeSeconds(0.5);
    DisableObjAct(1049401521, 227050);
    WaitFor(EventFlag(12020570));
    EnableObjAct(1049401521, 227050);
});


