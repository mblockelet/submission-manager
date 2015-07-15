CREATE TABLE IF NOT EXISTS `tm_tasks` (
  `ID` bigint(20) NOT NULL,
  `sTextId` varchar(100) NOT NULL,
  `sSupportedLangProg` varchar(255) NOT NULL DEFAULT '*',
  `sAuthor` varchar(100) NOT NULL,
  `sAuthorSolution` varchar(100) NOT NULL,
  `bShowLimits` tinyint(4) NOT NULL DEFAULT '1',
  `bUserTests` tinyint(4) NOT NULL DEFAULT '1',
  `bChecked` tinyint(4) NOT NULL DEFAULT '0',
  `iEvalMode` tinyint(4) NOT NULL DEFAULT '0',
  `bUsesLibrary` tinyint(4) NOT NULL,
  `bUseLatex` tinyint(4) NOT NULL DEFAULT '0',
  `iMinScoreForSuccessGlobal` int(11) NOT NULL DEFAULT '100',
  `bIsEvaluable` tinyint(4) NOT NULL DEFAULT '1',
  `sTemplateName` varchar(100) NOT NULL DEFAULT '',
  `iVersion` int(11) NOT NULL DEFAULT '0',
  `bBebras` tinyint(1) NOT NULL DEFAULT '0',
  `sBebrasUrl` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `text_id` (`sTextId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
