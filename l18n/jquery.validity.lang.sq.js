$.extend($.validity.messages, {
    require:"#{field} eshte e detyrueshme.",
    // Format validators:
    match:"#{field} nuk eshte ne format te vlefshem.",
    integer:"#{field} duhet te jete nje numer i plote pozitiv.",
    date:"#{field} duhet te jete nje date.",
    email:"#{field} duhet te jete nje adrese email.",
    usd:"#{field} duhet te jete nje vlere e lejueshme ne USD.",
    url:"#{field} debe duhet te jete nje adrese URL.",
    number:"#{field} duhet te jete nje numer.",
    zip:"#{field} duhet te jete nje kod postar ne formatin ##### ose #####-####.",
    phone:"#{field} duhet te jete nje numer telefoni sipas formatit ###-###-####.",
    guid:"#{field} duhet te jete nje GUID i tipit {3F2504E0-4F89-11D3-9A0C-0305E82C3301}.",
    time24:"#{field} duhet te jete ne format 24 ores (psh.: 23:00).",
    time12:"#{field} duhet te jete ne format 12 oresh (psh.:12:00 AM/PM)",

    // Value range messages:
    lessThan:"#{field} duhet te jete me e vogel se #{max}.",
    lessThanOrEqualTo:"#{field} duhet te jete me i vogel ose i barabarte me #{max}.",
    greaterThan:"#{field} duhet te jete me e madhe se #{min}.",
    greaterThanOrEqualTo:"#{field} duhet te jete me e madhe ose i barabarte me #{min}.",
    range:"#{field} duhet te jete mes #{min} dhe #{max}.",

    // Value length messages:
    tooLong:"#{field} nuk duhet te kaloje #{max} karaktere.",
    tooShort:"#{field} duhet te kete te pakten #{min} karaktere.",

    // Composition validators:
    nonHtml:"#{field} nuk duhet te kete karaktere HTML.",
    alphabet:"#{field} nuk duhet te kete karaktere te ndaluara.",

    minCharClass:"#{field} nuk duhet te kete me shume se #{min} karaktere {#}charclass.",
    maxCharClass:"#{field} nuk duhet te kete me pak se #{min} karaktere #{charClass}.",

    // Aggregate validator messages:
    equal:"Vlerat jane te njejta.",
    distinct:"Nje vlere perseritet.",
    sum:"Shuma e vlerave duhet te jete me e vogel se #{sum}.",
    sumMax:"Shuma e vlerave duhet te jete me e vogel se #{max}.",
    sumMin:"Shuma e vlerave duhet te jete me e madhe se #{min}.",

    // Radio validator messages:
    radioChecked:"Vlera e perzgjedhur nuk eshte e vlefshme.",

    generic:"E pavlefshme."
});

$.validity.setup({ defaultFieldName:"Kjo fushe", });
