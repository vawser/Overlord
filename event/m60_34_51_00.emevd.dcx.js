// ==EMEVD==
// @docs    er-common.emedf.json
// @compress    DCX_KRAK
// @game    Sekiro
// @string    N:\GR\data\Param\event\common_func.emevd N:\GR\data\Param\event\common_macro.emevd      
// @linked    [0,82]
// @version    3.4.1
// ==/EMEVD==

$Event(0, Default, function() {
    InitializeCommonEvent(0, 9008000, 1034510100);
    InitializeCommonEvent(1, 9008000, 1034510101);
    InitializeCommonEvent(2, 9008000, 1034510102);
    InitializeCommonEvent(3, 9008000, 1034510103);
    InitializeCommonEvent(4, 9008000, 1034510104);
    InitializeCommonEvent(5, 9008000, 1034510105);
    InitializeCommonEvent(6, 9008000, 1034510106);
    InitializeCommonEvent(7, 9008000, 1034510107);
    InitializeCommonEvent(8, 9008000, 1034510108);
    InitializeCommonEvent(9, 9008000, 1034510109);
    InitializeCommonEvent(10, 9008000, 1034510110);
    InitializeCommonEvent(11, 9008000, 1034510111);
    InitializeCommonEvent(12, 9008000, 1034510112);
    InitializeCommonEvent(13, 9008000, 1034510113);
    InitializeCommonEvent(14, 9008000, 1034510114);
    InitializeCommonEvent(15, 9008000, 1034510115);
    
    InitializeCommonEvent(0, 90005605, 1034511620, 268, 12012480, 0, 1034512620, 1034512621, 1034512622, 0, 0, 0, 0);
    InitializeCommonEvent(0, 900055278, 1034510739, 1034511739, 1506, 9320, 30051, 0, 0, 0);
    InitializeCommonEvent(0, 90005920, 1034510600, 1034511600, 1034513600);
    InitializeEvent(0, 1034512580, 0);
});

$Event(1034512580, Default, function() {
    RegisterLadder(1034510580, 1034510581, 1034511580);
});


