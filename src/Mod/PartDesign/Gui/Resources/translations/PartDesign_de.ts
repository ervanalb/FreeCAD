<?xml version="1.0" encoding="utf-8"?>
<!DOCTYPE TS>
<TS version="2.1" language="de" sourcelanguage="en">
  <context>
    <name>App::Property</name>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="72"/>
      <source>The center point of the helix' start; derived from the reference axis.</source>
      <translation>Der Mittelpunkt des Wendelanfangs; abgeleitet von der Referenzachse.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="74"/>
      <source>The helix' direction; derived from the reference axis.</source>
      <translation>Die Richtung der Wendel, abgeleitet von der Referenzachse.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="76"/>
      <source>The reference axis of the helix.</source>
      <translation>Die Referenzachse der Wendel.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="78"/>
      <source>The helix input mode specifies which properties are set by the user.
Dependent properties are then calculated.</source>
      <translation>Der Wendel-Eingabemodus legt fest, welche Eigenschaften vom Benutzer gesetzt werden.
Abhängige Eigenschaften werden dann berechnet.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="82"/>
      <source>The axial distance between two turns.</source>
      <translation>Der axiale Abstand zwischen zwei Windungen.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="84"/>
      <source>The height of the helix' path, not accounting for the extent of the profile.</source>
      <translation>Die Höhe des Wendelpfades ohne Berücksichtigung der Höhe des Profils.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="86"/>
      <source>The number of turns in the helix.</source>
      <translation>Die Anzahl der Windungen der Wendel.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="89"/>
      <source>The angle of the cone that forms a hull around the helix.
Non-zero values turn the helix into a conical spiral.
Positive values make the radius grow, nevatige shrink.</source>
      <translation>Der Winkel des Kegels, der eine Hülle um die Wendel bildet.
Werte außer Null wandeln die Wendel in eine konische Spirale.
Positive Werte lassen den Radius wachsen, negative lassen ihn schrumpfen.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="94"/>
      <source>The growth of the helix' radius per turn.
Non-zero values turn the helix into a conical spiral.</source>
      <translation>Das Wachstum des Wendelradius pro Windung.
Werte außer Null wandeln die Wendel in eine konische Spirale.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="97"/>
      <source>Sets the turning direction to left handed,
i.e. counter-clockwise when moving along its axis.</source>
      <translation>Legt die Drehrichtung nach links fest,
 d.h. gegen den Uhrzeigersinn, wenn man sich entlang der Achse bewegt.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="100"/>
      <source>Determines whether the helix points in the opposite direction of the axis.</source>
      <translation>Bestimmt, ob die Wendel in die entgegengesetzte Richtung der Achse zeigt.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="102"/>
      <source>If set, the result will be the intersection of the profile and the preexisting body.</source>
      <translation>Wenn gesetzt, wird das Ergebnis die gemeinsame Geometrie (Schnittmenge) des Profils und des bereits existierenden Körpers sein.</translation>
    </message>
    <message>
      <location filename="../../../App/FeatureHelix.cpp" line="104"/>
      <source>If false, the tool will propose an initial value for the pitch based on the profile bounding box,
so that self intersection is avoided.</source>
      <translation>Wenn falsch, schlägt das Werkzeug einen Anfangswert für die Ganghöhe (Steigung) vor, der auf dem Profil-Begrenzungsrahmen basiert,
damit eine Selbstdurchdringung vermieden wird.</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditiveHelix</name>
    <message>
      <location filename="../../Command.cpp" line="1745"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1746"/>
      <source>Additive helix</source>
      <translation>Wendel</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1747"/>
      <source>Sweep a selected sketch along a helix</source>
      <translation>Eine gewählte Skizze entlang einer Wendel austragen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditiveLoft</name>
    <message>
      <location filename="../../Command.cpp" line="1644"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1645"/>
      <source>Additive loft</source>
      <translation>Ausformung</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1646"/>
      <source>Loft a selected profile through other profile sections</source>
      <translation>Loft eines ausgewählten Profils durch andere Profilabschnitte</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignAdditivePipe</name>
    <message>
      <location filename="../../Command.cpp" line="1542"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1543"/>
      <source>Additive pipe</source>
      <translation>Rohr</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1544"/>
      <source>Sweep a selected sketch along a path or to other profiles</source>
      <translation>Trägt eine ausgewählte Skizze entlang eines Pfades oder zu weiteren Profilen aus</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignBody</name>
    <message>
      <location filename="../../CommandBody.cpp" line="85"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="86"/>
      <source>Create body</source>
      <translation>Körper erstellen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="87"/>
      <source>Create a new body and make it active</source>
      <translation>Erzeugen und Aktivieren eines neuen Körpers</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignBoolean</name>
    <message>
      <location filename="../../Command.cpp" line="2638"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2639"/>
      <source>Boolean operation</source>
      <translation>Boolesche Operation</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2640"/>
      <source>Boolean operation with two or more bodies</source>
      <translation>Boolsche Operation mit zwei oder mehr Körpern</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignCS</name>
    <message>
      <location filename="../../Command.cpp" line="245"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="246"/>
      <source>Create a local coordinate system</source>
      <translation>Lokales Koordinatensystem erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="247"/>
      <source>Create a new local coordinate system</source>
      <translation>Neues lokales Koordinatensystem erstellen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignChamfer</name>
    <message>
      <location filename="../../Command.cpp" line="2038"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2039"/>
      <source>Chamfer</source>
      <translation>Fase</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2040"/>
      <source>Chamfer the selected edges of a shape</source>
      <translation>Die gewählten Kanten einer Form abschrägen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignClone</name>
    <message>
      <location filename="../../Command.cpp" line="427"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="428"/>
      <source>Create a clone</source>
      <translation>Klon erzeugen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="429"/>
      <source>Create a new clone</source>
      <translation>Neuen Klon erstellen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignDraft</name>
    <message>
      <location filename="../../Command.cpp" line="2067"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2068"/>
      <source>Draft</source>
      <translation>Formschräge</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2069"/>
      <source>Make a draft on a face</source>
      <translation>Versieht eine Fläche mit einer Formschräge</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignDuplicateSelection</name>
    <message>
      <location filename="../../CommandBody.cpp" line="602"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="603"/>
      <source>Duplicate selected object</source>
      <translation>Ausgewähltes Objekt duplizieren</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="604"/>
      <source>Duplicates the selected object and adds it to the active body</source>
      <translation>Dupliziert das ausgewählte Objekt und fügt es dem aktiven Körper hinzu</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignFillet</name>
    <message>
      <location filename="../../Command.cpp" line="2010"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2011"/>
      <source>Fillet</source>
      <translation>Verrundung</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2012"/>
      <source>Make a fillet on an edge, face or body</source>
      <translation>Kante, Fläche oder Körper verrunden</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignGroove</name>
    <message>
      <location filename="../../Command.cpp" line="1475"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1476"/>
      <source>Groove</source>
      <translation>Nut</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1477"/>
      <source>Groove a selected sketch</source>
      <translation>Erzeuge Nut mit der ausgewählten Skizze</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignHole</name>
    <message>
      <location filename="../../Command.cpp" line="1369"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1370"/>
      <source>Hole</source>
      <translation>Bohrung</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1371"/>
      <source>Create a hole with the selected sketch</source>
      <translation>Erzeuge Bohrung mit ausgewählter Skizze</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignLine</name>
    <message>
      <location filename="../../Command.cpp" line="189"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="190"/>
      <source>Create a datum line</source>
      <translation>Bezugslinie erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="191"/>
      <source>Create a new datum line</source>
      <translation>Erstellen einer neuen Bezugslinie</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignLinearPattern</name>
    <message>
      <location filename="../../Command.cpp" line="2336"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2337"/>
      <source>LinearPattern</source>
      <translation>Lineares Muster</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2338"/>
      <source>Create a linear pattern feature</source>
      <translation>Lineares Muster erzeugen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMigrate</name>
    <message>
      <location filename="../../CommandBody.cpp" line="308"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="309"/>
      <source>Migrate</source>
      <translation>Migrieren</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="310"/>
      <source>Migrate document to the modern PartDesign workflow</source>
      <translation>Migriere Dokument zum modernen PartDesign-Arbeitsablauf</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMirrored</name>
    <message>
      <location filename="../../Command.cpp" line="2274"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2275"/>
      <source>Mirrored</source>
      <translation>Spiegeln</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2276"/>
      <source>Create a mirrored feature</source>
      <translation>Erzeuge gespiegeltes Objekt</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveFeature</name>
    <message>
      <location filename="../../CommandBody.cpp" line="658"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="659"/>
      <source>Move object to other body</source>
      <translation>Objekt in anderen Körper verschieben</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="660"/>
      <source>Moves the selected object to another body</source>
      <translation>Verschiebt das ausgewählte Objekt in anderen Körper</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveFeatureInTree</name>
    <message>
      <location filename="../../CommandBody.cpp" line="825"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="826"/>
      <source>Move object after other object</source>
      <translation>Objekt hinter ein anderes Objekt verschieben</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="827"/>
      <source>Moves the selected object and insert it after another object</source>
      <translation>Verschiebt das ausgewählte Objekt und fügt es hinter einem anderen Objekt ein</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMoveTip</name>
    <message>
      <location filename="../../CommandBody.cpp" line="523"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="524"/>
      <source>Set tip</source>
      <translation>Arbeitsposition festlegen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="525"/>
      <source>Move the tip of the body</source>
      <translation>Arbeitsposition im Strukturbaum verschieben</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignMultiTransform</name>
    <message>
      <location filename="../../Command.cpp" line="2514"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2515"/>
      <source>Create MultiTransform</source>
      <translation>Mehrfach-Transformation erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2516"/>
      <source>Create a multitransform feature</source>
      <translation>Erstellen einer Mehrfach-Transformation</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignNewSketch</name>
    <message>
      <location filename="../../Command.cpp" line="485"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="486"/>
      <source>Create sketch</source>
      <translation>Skizze erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="487"/>
      <source>Create a new sketch</source>
      <translation>Neue Skizze erstellen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignPad</name>
    <message>
      <location filename="../../Command.cpp" line="1305"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1306"/>
      <source>Pad</source>
      <translation>Aufpolsterung</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1307"/>
      <source>Pad a selected sketch</source>
      <translation>Ausgewählte Skizze extrudieren</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignPlane</name>
    <message>
      <location filename="../../Command.cpp" line="161"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="162"/>
      <source>Create a datum plane</source>
      <translation>Bezugsebene erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="163"/>
      <source>Create a new datum plane</source>
      <translation>Erstellen einer neuen Bezugsebene</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignPocket</name>
    <message>
      <location filename="../../Command.cpp" line="1337"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1338"/>
      <source>Pocket</source>
      <translation>Tasche</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1339"/>
      <source>Create a pocket with the selected sketch</source>
      <translation>Vertiefung  mit skizziertem Querschnitt erzeugen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignPoint</name>
    <message>
      <location filename="../../Command.cpp" line="217"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="218"/>
      <source>Create a datum point</source>
      <translation>Bezugspunkt erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="219"/>
      <source>Create a new datum point</source>
      <translation>Erstellen eines neuen Bezugspunkts</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignPolarPattern</name>
    <message>
      <location filename="../../Command.cpp" line="2400"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2401"/>
      <source>PolarPattern</source>
      <translation>Polares Muster</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2402"/>
      <source>Create a polar pattern feature</source>
      <translation>Erzeugen eines polaren Musters</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignRevolution</name>
    <message>
      <location filename="../../Command.cpp" line="1416"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1417"/>
      <source>Revolution</source>
      <translation>Drehteil</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1418"/>
      <source>Revolve a selected sketch</source>
      <translation>Rotiere die ausgewählte Skizze</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignScaled</name>
    <message>
      <location filename="../../Command.cpp" line="2465"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2466"/>
      <source>Scaled</source>
      <translation>skaliert</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2467"/>
      <source>Create a scaled feature</source>
      <translation>Erstellen eines skalierten Objekts</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignShapeBinder</name>
    <message>
      <location filename="../../Command.cpp" line="277"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="278"/>
      <source>Create a shape binder</source>
      <translation>Formbinder erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="279"/>
      <source>Create a new shape binder</source>
      <translation>Neuen Formbinder erstellen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubShapeBinder</name>
    <message>
      <location filename="../../Command.cpp" line="343"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="344"/>
      <location filename="../../Command.cpp" line="345"/>
      <source>Create a sub-object(s) shape binder</source>
      <translation>Formbinder für Teilobjekt erstellen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractiveHelix</name>
    <message>
      <location filename="../../Command.cpp" line="1822"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1823"/>
      <source>Subtractive helix</source>
      <translation>Wendel</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1824"/>
      <source>Sweep a selected sketch along a helix and remove it from the body</source>
      <translation>Eine gewählte Skizze entlang einer Wendel austragen und vom Körper abziehen</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractiveLoft</name>
    <message>
      <location filename="../../Command.cpp" line="1695"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1696"/>
      <source>Subtractive loft</source>
      <translation>Ausformung</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1697"/>
      <source>Loft a selected profile through other profile sections and remove it from the body</source>
      <translation>Loft eines ausgewählten Profils durch andere Profilabschnitte und entfernt Sie es aus dem Körper</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignSubtractivePipe</name>
    <message>
      <location filename="../../Command.cpp" line="1593"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1594"/>
      <source>Subtractive pipe</source>
      <translation>Rohr</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1595"/>
      <source>Sweep a selected sketch along a path or to other profiles and remove it from the body</source>
      <translation>Trägt eine ausgewählte Skizze entlang eines Pfades oder zu weiteren Profilen aus und zieht das Ergebnis vom bestehenden Körper ab</translation>
    </message>
  </context>
  <context>
    <name>CmdPartDesignThickness</name>
    <message>
      <location filename="../../Command.cpp" line="2125"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2126"/>
      <source>Thickness</source>
      <translation>Dicke</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2127"/>
      <source>Make a thick solid</source>
      <translation>Aufgedickten Festkörper erzeugen</translation>
    </message>
  </context>
  <context>
    <name>CmdPrimtiveCompAdditive</name>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="68"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="69"/>
      <location filename="../../CommandPrimitive.cpp" line="70"/>
      <source>Create an additive primitive</source>
      <translation>Grundkörper hinzufügen</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="199"/>
      <source>Additive Box</source>
      <translation>Quader</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="203"/>
      <source>Additive Cylinder</source>
      <translation>Zylinder</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="207"/>
      <source>Additive Sphere</source>
      <translation>Kugel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="211"/>
      <source>Additive Cone</source>
      <translation>Kegel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="215"/>
      <source>Additive Ellipsoid</source>
      <translation>Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="219"/>
      <source>Additive Torus</source>
      <translation>Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="223"/>
      <source>Additive Prism</source>
      <translation>Prisma</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="227"/>
      <source>Additive Wedge</source>
      <translation>Keil</translation>
    </message>
  </context>
  <context>
    <name>CmdPrimtiveCompSubtractive</name>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="243"/>
      <source>PartDesign</source>
      <translation>Teile-Konstruktion</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="244"/>
      <location filename="../../CommandPrimitive.cpp" line="245"/>
      <source>Create a subtractive primitive</source>
      <translation>Grundkörper abziehen</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="355"/>
      <source>Subtractive Box</source>
      <translation>Quader</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="359"/>
      <source>Subtractive Cylinder</source>
      <translation>Zylinder</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="363"/>
      <source>Subtractive Sphere</source>
      <translation>Kugel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="367"/>
      <source>Subtractive Cone</source>
      <translation>Kegel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="371"/>
      <source>Subtractive Ellipsoid</source>
      <translation>Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="375"/>
      <source>Subtractive Torus</source>
      <translation>Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="379"/>
      <source>Subtractive Prism</source>
      <translation>Prisma</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="383"/>
      <source>Subtractive Wedge</source>
      <translation>Keil</translation>
    </message>
  </context>
  <context>
    <name>Command</name>
    <message>
      <location filename="../../Command.cpp" line="298"/>
      <source>Edit ShapeBinder</source>
      <translation>Bearbeite Formbinder</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="307"/>
      <source>Create ShapeBinder</source>
      <translation>Formbinder erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="390"/>
      <source>Create SubShapeBinder</source>
      <translation>Formbinder für Teilobjekt erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="445"/>
      <source>Create Clone</source>
      <translation>Klon erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="642"/>
      <location filename="../../Command.cpp" line="1205"/>
      <source>Make copy</source>
      <translation>Kopie erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="666"/>
      <source>Create a Sketch on Face</source>
      <translation>Skizze auf einer Fläche erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="687"/>
      <source>Create a new Sketch</source>
      <translation>Neue Skizze erstellen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2564"/>
      <source>Convert to MultiTransform feature</source>
      <translation>Wandle in Mehrfachtransformation um</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2656"/>
      <source>Create Boolean</source>
      <translation>Boolean erstellen</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.cpp" line="104"/>
      <location filename="../../CommandBody.cpp" line="189"/>
      <source>Add a Body</source>
      <translation>Einen Körper hinzufügen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="426"/>
      <source>Migrate legacy part design features to Bodies</source>
      <translation>Migrieren Sie alte Teildesignfunktionen in Körper</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="571"/>
      <source>Move tip to selected feature</source>
      <translation>Arbeitsposition zum gewählten Objekt verschieben</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="616"/>
      <source>Duplicate a PartDesign object</source>
      <translation>Ein PartDesign-Objekt duplizieren</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="739"/>
      <source>Move an object</source>
      <translation>Objekt verschieben</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="890"/>
      <source>Move an object inside tree</source>
      <translation>Objekt innerhalb des Baumes verschieben</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="292"/>
      <source>Mirrored</source>
      <translation>Spiegeln</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="320"/>
      <source>Make LinearPattern</source>
      <translation>Lineares Muster erstellen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="358"/>
      <source>PolarPattern</source>
      <translation>Polares Muster</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="386"/>
      <source>Scaled</source>
      <translation>skaliert</translation>
    </message>
  </context>
  <context>
    <name>FeaturePickDialog</name>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="42"/>
      <source>Valid</source>
      <translation>Gültig</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="43"/>
      <source>Invalid shape</source>
      <translation>Ungültige Form</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="44"/>
      <source>No wire in sketch</source>
      <translation>Kein Kantenzug in Skizze</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="45"/>
      <source>Sketch already used by other feature</source>
      <translation>Skizze wurde bereits für anderes Objekt verwendet</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="46"/>
      <source>Sketch belongs to another Body feature</source>
      <translation>Skizze gehört zu einem anderen Körper</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="47"/>
      <source>Base plane</source>
      <translation>Basis-Ebene</translation>
    </message>
    <message>
      <location filename="../../FeaturePickDialog.cpp" line="48"/>
      <source>Feature is located after the Tip feature</source>
      <translation>Objekt befindet sich hinter der markierten Arbeitsposition</translation>
    </message>
  </context>
  <context>
    <name>Gui::TaskView::TaskWatcherCommands</name>
    <message>
      <location filename="../../Workbench.cpp" line="54"/>
      <source>Face tools</source>
      <translation>Flächenwerkzeuge</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="55"/>
      <source>Sketch tools</source>
      <translation>Skizzenwerkzeuge</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="56"/>
      <source>Create Geometry</source>
      <translation>Geometrie erstellen</translation>
    </message>
  </context>
  <context>
    <name>InvoluteGearParameter</name>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="14"/>
      <source>Involute parameter</source>
      <translation>Evolventenparameter</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="20"/>
      <source>Number of teeth:</source>
      <translation>Anzahl der Zähne:</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="40"/>
      <source>Module:</source>
      <translation>Modul:</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="84"/>
      <source>Pressure angle:</source>
      <translation>Eingriffswinkel:</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="125"/>
      <source>High precision:</source>
      <translation>Hohe Genauigkeit:</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="139"/>
      <location filename="../../../InvoluteGearFeature.ui" line="166"/>
      <source>True</source>
      <translation>Wahr</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="144"/>
      <location filename="../../../InvoluteGearFeature.ui" line="171"/>
      <source>False</source>
      <translation>Falsch</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.ui" line="152"/>
      <source>External gear:</source>
      <translation>Außenrad:</translation>
    </message>
  </context>
  <context>
    <name>PartDesign::Groove</name>
    <message>
      <location filename="../../../App/FeatureGroove.cpp" line="101"/>
      <source>The requested feature cannot be created. The reason may be that:
  - the active Body does not contain a base shape, so there is no
  material to be removed;
  - the selected sketch does not belong to the active Body.</source>
      <translation>Das gewünschte Merkmal kann nicht erzeugt werden. Der Grund kann sein:
- Der aktive Körper enthält keine Basisform, so dass kein Material entfernt werden kann;
- Die gewählte Skizze gehört nicht zum aktiven Körper.</translation>
    </message>
  </context>
  <context>
    <name>PartDesign::Hole</name>
    <message>
      <location filename="../../../App/FeatureHole.cpp" line="1646"/>
      <source>The requested feature cannot be created. The reason may be that:
  - the active Body does not contain a base shape, so there is no
  material to be removed;
  - the selected sketch does not belong to the active Body.</source>
      <translation>Das gewünschte Merkmal kann nicht erzeugt werden. Der Grund kann sein:
- Der aktive Körper enthält keine Basisform, so dass kein Material entfernt werden kann;
- Die gewählte Skizze gehört nicht zum aktiven Körper.</translation>
    </message>
  </context>
  <context>
    <name>PartDesign::Pocket</name>
    <message>
      <location filename="../../../App/FeaturePocket.cpp" line="101"/>
      <source>The requested feature cannot be created. The reason may be that:
  - the active Body does not contain a base shape, so there is no
  material to be removed;
  - the selected sketch does not belong to the active Body.</source>
      <translation>Das gewünschte Merkmal kann nicht erzeugt werden. Der Grund kann sein:
- Der aktive Körper enthält keine Basisform, so dass kein Material entfernt werden kann;
- Die gewählte Skizze gehört nicht zum aktiven Körper.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgActiveBody</name>
    <message>
      <location filename="../../DlgActiveBody.ui" line="14"/>
      <source>Active Body Required</source>
      <translation>Aktiver Körper erforderlich</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.ui" line="20"/>
      <source>To create a new PartDesign object, there must be an active Body object in the document.

Please select a body from below, or create a new body.</source>
      <translation>Um ein neues PartDesign-Objekt zu erstellen, muss ein aktiver Körper in diesem Dokument vorhanden sein.
Bitte unten einen der vorhandenen Körper auswählen oder einen neuen Körper erstellen.</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.ui" line="36"/>
      <source>Create new body</source>
      <translation>Neuen Körper erstellen</translation>
    </message>
    <message>
      <location filename="../../DlgActiveBody.cpp" line="55"/>
      <source>Please select</source>
      <translation>Bitte auswählen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgPrimitives</name>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="14"/>
      <source>Geometric Primitives</source>
      <translation>Geometrische Grundkörper</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="62"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="153"/>
      <source>Length:</source>
      <translation>Länge:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="82"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="173"/>
      <source>Width:</source>
      <translation>Breite:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="193"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="287"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="505"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1254"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1580"/>
      <source>Height:</source>
      <translation>Höhe:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="267"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="625"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1600"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1749"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1805"/>
      <source>Radius:</source>
      <translation>Radius:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="307"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1274"/>
      <source>Angle in first direction:</source>
      <translation>Winkel in erster Richtung:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="314"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1281"/>
      <source>Angle in first direction</source>
      <translation>Winkel in erster Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="333"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1300"/>
      <source>Angle in second direction:</source>
      <translation>Winkel in zweiter Richtung:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="340"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1307"/>
      <source>Angle in second direction</source>
      <translation>Winkel in zweiter Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="391"/>
      <source>Rotation angle:</source>
      <translation>Drehwinkel:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="465"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="797"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1016"/>
      <source>Radius 1:</source>
      <translation>Radius 1:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="485"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="820"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1039"/>
      <source>Radius 2:</source>
      <translation>Radius 2:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="551"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1620"/>
      <source>Angle:</source>
      <translation>Winkel:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="674"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="896"/>
      <source>U parameter:</source>
      <translation>U-Parameter:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="694"/>
      <source>V parameters:</source>
      <translation>V-Parameter:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="804"/>
      <source>Radius in local z-direction</source>
      <translation>Radius in lokaler Z-Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="827"/>
      <source>Radius in local x-direction</source>
      <translation>Radius in lokaler X-Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="843"/>
      <source>Radius 3:</source>
      <translation>Radius 3:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="850"/>
      <source>Radius in local y-direction
If zero, it is equal to Radius2</source>
      <translation>Radius in lokaler Y-Richtung
Wenn Null, ist er gleich Radius2</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="916"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1111"/>
      <source>V parameter:</source>
      <translation>V-Parameter:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1023"/>
      <source>Radius in local xy-plane</source>
      <translation>Radius in lokaler XY-Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1046"/>
      <source>Radius in local xz-plane</source>
      <translation>Radius in lokaler XZ-Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1091"/>
      <source>U Parameter:</source>
      <translation>U-Parameter:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1214"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2290"/>
      <source>Polygon:</source>
      <translation>Vieleck:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1234"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2313"/>
      <source>Circumradius:</source>
      <translation>Umkreisradius:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1353"/>
      <source>X min/max:</source>
      <translation>X min/max:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1383"/>
      <source>Y min/max:</source>
      <translation>Y min/max:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1413"/>
      <source>Z min/max:</source>
      <translation>Z min/max:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1443"/>
      <source>X2 min/max:</source>
      <translation>X2 min/max:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1476"/>
      <source>Z2 min/max:</source>
      <translation>Z2 min/max:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1560"/>
      <source>Pitch:</source>
      <translation>Steigung:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1637"/>
      <source>Coordinate system:</source>
      <translation>Koordinatensystem:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1645"/>
      <source>Right-handed</source>
      <translation>Rechtsdrehened</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1650"/>
      <source>Left-handed</source>
      <translation>Linksdrehend</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1709"/>
      <source>Growth:</source>
      <translation>Wachstum:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1729"/>
      <source>Number of rotations:</source>
      <translation>Anzahl der Drehungen:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1825"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1947"/>
      <source>Angle 1:</source>
      <translation>Winkel 1:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1842"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="1964"/>
      <source>Angle 2:</source>
      <translation>Winkel 2:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1879"/>
      <source>From three points</source>
      <translation>Aus drei Punkten</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1907"/>
      <source>Major radius:</source>
      <translation>Hauptradius:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="1927"/>
      <source>Minor radius:</source>
      <translation>Nebenradius:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2005"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2093"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2170"/>
      <source>X:</source>
      <translation>X:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2025"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2113"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2193"/>
      <source>Y:</source>
      <translation>Y:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2045"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2133"/>
      <location filename="../../TaskPrimitiveParameters.ui" line="2216"/>
      <source>Z:</source>
      <translation>Z:</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2086"/>
      <source>Start point</source>
      <translation>Startpunkt</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.ui" line="2160"/>
      <source>End point</source>
      <translation>Endpunkt</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::DlgReference</name>
    <message>
      <location filename="../../DlgReference.ui" line="14"/>
      <source>Reference</source>
      <translation>Referenz</translation>
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="20"/>
      <source>You selected geometries which are not part of the active body. Please define how to handle those selections. If you do not want those references, cancel the command.</source>
      <translation>Die von Ihnen ausgewählten Geometrien sind nicht Teil des aktiven Körpers. Bitte legen Sie fest, wie diese Auswahlen behandelt werden sollen. Brechen Sie den Befehl ab, wenn Sie diese Referenzen nicht möchten.</translation>
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="42"/>
      <source>Make independent copy (recommended)</source>
      <translation>Erzeugen einer unabhängigen Kopie (empfohlen)</translation>
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="52"/>
      <source>Make dependent copy</source>
      <translation>Erzeugen einer abhängigen Kopie</translation>
    </message>
    <message>
      <location filename="../../DlgReference.ui" line="59"/>
      <source>Create cross-reference</source>
      <translation>Erzeugen eines Querverweises</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::NoDependentsSelection</name>
    <message>
      <location filename="../../ReferenceSelection.cpp" line="270"/>
      <source>Selecting this will cause circular dependency.</source>
      <translation>Auswahl verursacht zyklische Abhängigkeit.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskBooleanParameters</name>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="22"/>
      <source>Add body</source>
      <translation>Körper hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="32"/>
      <source>Remove body</source>
      <translation>Körper entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="48"/>
      <source>Fuse</source>
      <translation>Vereinigung</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="53"/>
      <source>Cut</source>
      <translation>Differenz</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.ui" line="58"/>
      <source>Common</source>
      <translation>Schnitt</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="52"/>
      <source>Boolean parameters</source>
      <translation>Boolesche Parameter</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="81"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskBoxPrimitives</name>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="49"/>
      <source>Primitive parameters</source>
      <translation>Parameter des Grundkörpers</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="718"/>
      <source>Cone radii are equal</source>
      <translation>Kegelradien sind gleich</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="719"/>
      <source>The radii for cones must not be equal!</source>
      <translation>Die Radien für Kegel dürfen nicht gleich sein!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="794"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="799"/>
      <location filename="../../TaskPrimitiveParameters.cpp" line="804"/>
      <source>Invalid wedge parameters</source>
      <translation>Ungültige Keil-Parameter</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="795"/>
      <source>X min must not be equal to X max!</source>
      <translation>X min darf nicht gleich X max sein!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="800"/>
      <source>Y min must not be equal to Y max!</source>
      <translation>Y min darf nicht gleich Y max sein!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="805"/>
      <source>Z min must not be equal to Z max!</source>
      <translation>Z min darf nicht gleich Z max sein!</translation>
    </message>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="843"/>
      <source>Create primitive</source>
      <translation>Grundkörper erstellen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskChamferParameters</name>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="22"/>
      <location filename="../../TaskChamferParameters.ui" line="36"/>
      <location filename="../../TaskChamferParameters.cpp" line="170"/>
      <source>Click button to enter selection mode,
click again to end selection</source>
      <translation>Klicken Sie auf den Button um in den Auswahl-Modus zu gelangen.
Nochmaliges Klicken beendet den Auswahl-Modus.</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="26"/>
      <source>Add</source>
      <translation>Hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="40"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="52"/>
      <source>- select an item to highlight it
- double-click on an item to see the chamfers</source>
      <translation>- Wählen Sie ein Element um es zu markieren
- Doppelklicken Sie auf ein Element, um die Fasen zu sehen</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="67"/>
      <source>Type</source>
      <translation>Typ</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="75"/>
      <source>Equal distance</source>
      <translation>Gleiche Distanz</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="80"/>
      <source>Two distances</source>
      <translation>Zwei Distanzen</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="85"/>
      <source>Distance and angle</source>
      <translation>Distanz und Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="98"/>
      <source>Flip direction</source>
      <translation>Richtung umkehren</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="119"/>
      <source>Size</source>
      <translation>Größe</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="138"/>
      <source>Use All Edges</source>
      <translation>Alle Kanten verwenden</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="165"/>
      <source>Size 2</source>
      <translation>Größe 2</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.ui" line="198"/>
      <source>Angle</source>
      <translation>Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.cpp" line="180"/>
      <location filename="../../TaskChamferParameters.cpp" line="182"/>
      <location filename="../../TaskChamferParameters.cpp" line="257"/>
      <location filename="../../TaskChamferParameters.cpp" line="259"/>
      <source>There must be at least one item</source>
      <translation>Es muss mindestens ein Element vorhanden sein</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.cpp" line="225"/>
      <source>Selection error</source>
      <translation>Auswahlfehler</translation>
    </message>
    <message>
      <location filename="../../TaskChamferParameters.cpp" line="225"/>
      <source>At least one item must be kept.</source>
      <translation>Es muss mindestens ein Element behalten werden.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgBooleanParameters</name>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="352"/>
      <source>Empty body list</source>
      <translation>Leere Körperliste</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="353"/>
      <source>The body list cannot be empty</source>
      <translation>Die Körperliste darf nicht leer sein</translation>
    </message>
    <message>
      <location filename="../../TaskBooleanParameters.cpp" line="364"/>
      <source>Boolean: Accept: Input error</source>
      <translation>Boolean: Akzeptieren: Eingabefehler</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgDatumParameters</name>
    <message>
      <location filename="../../TaskDatumParameters.cpp" line="104"/>
      <source>Incompatible reference set</source>
      <translation>Inkompatible Referenzen</translation>
    </message>
    <message>
      <location filename="../../TaskDatumParameters.cpp" line="105"/>
      <source>There is no attachment mode that fits the current set of references. If you choose to continue, the feature will remain where it is now, and will not be moved as the references change. Continue?</source>
      <translation>Es gibt keinen Anhang-Modus, das zu dem aktuellen Set von Referenzen passt. Wenn du fortsetzen willst, bleibt die Funktion dort, wo sie jetzt ist, und wird nicht verschoben, wenn sich die Referenzen ändern. Fortsetzen?</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgFeatureParameters</name>
    <message>
      <location filename="../../TaskFeatureParameters.cpp" line="133"/>
      <source>Input error</source>
      <translation>Eingabefehler</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDlgShapeBinder</name>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="331"/>
      <source>Input error</source>
      <translation>Eingabefehler</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDraftParameters</name>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="22"/>
      <location filename="../../TaskDraftParameters.ui" line="36"/>
      <location filename="../../TaskDraftParameters.cpp" line="137"/>
      <source>Click button to enter selection mode,
click again to end selection</source>
      <translation>Klicken Sie auf den Button um in den Auswahl-Modus zu gelangen.
Nochmaliges Klicken beendet den Auswahl-Modus.</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="26"/>
      <source>Add face</source>
      <translation>Fläche hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="40"/>
      <source>Remove face</source>
      <translation>Fläche entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="52"/>
      <source>- select an item to highlight it
- double-click on an item to see the drafts</source>
      <translation>- Wählen Sie ein Element um es zu markieren
- Doppelklicken Sie auf ein Element, um die Formschräge zu sehen</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="65"/>
      <source>Draft angle</source>
      <translation>Formschrägenwinkel</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="98"/>
      <source>Neutral plane</source>
      <translation>Neutrale Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="115"/>
      <source>Pull direction</source>
      <translation>Zugrichtung</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.ui" line="130"/>
      <source>Reverse pull direction</source>
      <translation>Entformungsrichtung umkehren</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.cpp" line="147"/>
      <location filename="../../TaskDraftParameters.cpp" line="149"/>
      <location filename="../../TaskDraftParameters.cpp" line="273"/>
      <location filename="../../TaskDraftParameters.cpp" line="275"/>
      <source>There must be at least one item</source>
      <translation>Es muss mindestens ein Element vorhanden sein</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.cpp" line="241"/>
      <source>Selection error</source>
      <translation>Auswahlfehler</translation>
    </message>
    <message>
      <location filename="../../TaskDraftParameters.cpp" line="241"/>
      <source>At least one item must be kept.</source>
      <translation>Es muss mindestens ein Element behalten werden.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskDressUpParameters</name>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="276"/>
      <source>Add all edges</source>
      <translation>Alle Kanten hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="284"/>
      <source>Adds all edges to the list box (active only when in add selection mode).</source>
      <translation>Fügt alle Kanten in das Listenfeld hinzu (aktiv nur im Auswahlmodus Hinzufügen).</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="293"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskDressUpParameters.cpp" line="303"/>
      <location filename="../../TaskDressUpParameters.cpp" line="305"/>
      <source>There must be at least one item</source>
      <translation>Es muss mindestens ein Element vorhanden sein</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskExtrudeParameters</name>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="53"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="723"/>
      <source>No face selected</source>
      <translation>Keine Fläche ausgewählt</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="156"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="737"/>
      <source>Face</source>
      <translation>Fläche</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="360"/>
      <source>Sketch normal</source>
      <translation>Skizzennormale</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="362"/>
      <source>Face normal</source>
      <translation>Flächennormale</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="365"/>
      <source>Select reference...</source>
      <translation>Referenz auswählen...</translation>
    </message>
    <message>
      <location filename="../../TaskExtrudeParameters.cpp" line="369"/>
      <location filename="../../TaskExtrudeParameters.cpp" line="371"/>
      <source>Custom direction</source>
      <translation>Benutzerdefinierte Richtung</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskFeaturePick</name>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="23"/>
      <source>Allow used features</source>
      <translation>Verwendete Elemente zulassen</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="30"/>
      <source>Allow external features</source>
      <translation>Externe Objekte zulassen</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="42"/>
      <source>From other bodies of the same part</source>
      <translation>Von anderen Körpern des selben Teils</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="49"/>
      <source>From different parts or free features</source>
      <translation>Aus verschiedenen Baugruppen oder freien Objekten</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="66"/>
      <source>Make independent copy (recommended)</source>
      <translation>Erzeugen einer unabhängigen Kopie (empfohlen)</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="79"/>
      <source>Make dependent copy</source>
      <translation>Erzeugen einer abhängigen Kopie</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.ui" line="89"/>
      <source>Create cross-reference</source>
      <translation>Erzeugen eines Querverweises</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="61"/>
      <source>Valid</source>
      <translation>Gültig</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="62"/>
      <source>Invalid shape</source>
      <translation>Ungültige Form</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="63"/>
      <source>No wire in sketch</source>
      <translation>Kein Kantenzug in Skizze</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="64"/>
      <source>Sketch already used by other feature</source>
      <translation>Skizze wurde bereits für anderes Objekt verwendet</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="65"/>
      <source>Belongs to another body</source>
      <translation>Gehört zu einem anderen Körper</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="66"/>
      <source>Belongs to another part</source>
      <translation>Gehört zu einer anderen Baugruppe</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="67"/>
      <source>Doesn't belong to any body</source>
      <translation>Gehört zu keinem Körper</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="68"/>
      <source>Base plane</source>
      <translation>Basis-Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="69"/>
      <source>Feature is located after the tip feature</source>
      <translation>Objekt befindet sich hinter der markierten Arbeitsposition</translation>
    </message>
    <message>
      <location filename="../../TaskFeaturePick.cpp" line="80"/>
      <source>Select feature</source>
      <translation>Element auswählen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskFilletParameters</name>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="22"/>
      <location filename="../../TaskFilletParameters.ui" line="36"/>
      <location filename="../../TaskFilletParameters.cpp" line="124"/>
      <source>Click button to enter selection mode,
click again to end selection</source>
      <translation>Klicken Sie auf den Button um in den Auswahl-Modus zu gelangen.
Nochmaliges Klicken beendet den Auswahl-Modus.</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="26"/>
      <source>Add</source>
      <translation>Hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="40"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="52"/>
      <source>- select an item to highlight it
- double-click on an item to see the fillets</source>
      <translation>- Wählen Sie ein Element um es zu markieren
- Doppelklicken Sie auf ein Element, um die Verrundung zu sehen</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="65"/>
      <source>Radius:</source>
      <translation>Radius:</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.ui" line="81"/>
      <source>Use All Edges</source>
      <translation>Alle Kanten verwenden</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.cpp" line="134"/>
      <location filename="../../TaskFilletParameters.cpp" line="136"/>
      <location filename="../../TaskFilletParameters.cpp" line="211"/>
      <location filename="../../TaskFilletParameters.cpp" line="213"/>
      <source>There must be at least one item</source>
      <translation>Es muss mindestens ein Element vorhanden sein</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.cpp" line="179"/>
      <source>Selection error</source>
      <translation>Auswahlfehler</translation>
    </message>
    <message>
      <location filename="../../TaskFilletParameters.cpp" line="179"/>
      <source>At least one item must be kept.</source>
      <translation>Es muss mindestens ein Element behalten werden.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskHelixParameters</name>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="22"/>
      <source>Status:</source>
      <translation>Status:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="29"/>
      <source>Valid</source>
      <translation>Gültig</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="40"/>
      <source>Axis:</source>
      <translation>Achse:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="48"/>
      <location filename="../../TaskHelixParameters.cpp" line="232"/>
      <source>Base X axis</source>
      <translation>Basis X-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="53"/>
      <location filename="../../TaskHelixParameters.cpp" line="233"/>
      <source>Base Y axis</source>
      <translation>Basis Y-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="58"/>
      <location filename="../../TaskHelixParameters.cpp" line="234"/>
      <source>Base Z axis</source>
      <translation>Basis Z-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="63"/>
      <location filename="../../TaskHelixParameters.cpp" line="215"/>
      <source>Horizontal sketch axis</source>
      <translation>Horizontale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="68"/>
      <location filename="../../TaskHelixParameters.cpp" line="214"/>
      <source>Vertical sketch axis</source>
      <translation>Vertikale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="73"/>
      <location filename="../../TaskHelixParameters.cpp" line="213"/>
      <source>Normal sketch axis</source>
      <translation>Senkrecht zur Skizze</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="78"/>
      <location filename="../../TaskHelixParameters.cpp" line="197"/>
      <source>Select reference...</source>
      <translation>Referenz auswählen...</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="90"/>
      <source>Mode:</source>
      <translation>Modus:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="98"/>
      <source>Pitch-Height-Angle</source>
      <translation>Steigung-Höhe-Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="103"/>
      <source>Pitch-Turns-Angle</source>
      <translation>Steigung-Windungen-Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="108"/>
      <source>Height-Turns-Angle</source>
      <translation>Höhe-Windungen-Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="113"/>
      <source>Height-Turns-Growth</source>
      <translation>Höhe-Windungen-Aufweitung</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="125"/>
      <source>Pitch:</source>
      <translation>Steigung:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="152"/>
      <source>Height:</source>
      <translation>Höhe:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="179"/>
      <source>Turns:</source>
      <translation>Windungen:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="203"/>
      <source>Cone angle:</source>
      <translation>Kegelwinkel:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="233"/>
      <source>Radial growth:</source>
      <translation>Radiales Wachstum:</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="255"/>
      <source>Left handed</source>
      <translation>Linksgängig</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="265"/>
      <source>Reversed</source>
      <translation>Umgekehrt</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="272"/>
      <source>Remove outside of profile</source>
      <translation>Außerhalb des Profils entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.ui" line="289"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="51"/>
      <source>Helix parameters</source>
      <translation>Wendel-Parameter</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="217"/>
      <source>Construction line %1</source>
      <translation>Konstruktionslinie %1</translation>
    </message>
    <message>
      <location filename="../../TaskHelixParameters.cpp" line="333"/>
      <source>Error: unsupported mode</source>
      <translation>Fehler: nicht unterstützter Modus</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskHoleParameters</name>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="47"/>
      <source>Counterbore</source>
      <translation>Flachsenkung</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="48"/>
      <source>Countersink</source>
      <translation>Kegelsenkung</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="49"/>
      <source>Cheesehead (deprecated)</source>
      <translation>Zylindersenkung (veraltet)</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="50"/>
      <source>Countersink socket screw (deprecated)</source>
      <translation>Senkung (veraltet)</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="51"/>
      <source>Cap screw (deprecated)</source>
      <translation>Zylinderschraube (veraltet)</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="55"/>
      <source>Hole parameters</source>
      <translation>Bohrungsparameter</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="65"/>
      <source>None</source>
      <translation>Nichts</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="66"/>
      <source>ISO metric regular profile</source>
      <translation>Metrisches ISO Regelgewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="67"/>
      <source>ISO metric fine profile</source>
      <translation>Metrisches ISO Feingewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="68"/>
      <source>UTS coarse profile</source>
      <translation>UTS Grobprofil</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="69"/>
      <source>UTS fine profile</source>
      <translation>UTS Feinprofil</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="70"/>
      <source>UTS extra fine profile</source>
      <translation>UTS extra Feinprofil</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskLinearPatternParameters</name>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="22"/>
      <source>Add feature</source>
      <translation>Element hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="32"/>
      <source>Remove feature</source>
      <translation>Element entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="44"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="56"/>
      <source>Direction</source>
      <translation>Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="68"/>
      <source>Reverse direction</source>
      <translation>Umgekehrte Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="77"/>
      <source>Length</source>
      <translation>Länge</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="101"/>
      <source>Occurrences</source>
      <translation>Vorkommen</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="115"/>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.ui" line="124"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.cpp" line="105"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskLinearPatternParameters.cpp" line="333"/>
      <source>Error</source>
      <translation>Fehlermeldungen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskLoftParameters</name>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="20"/>
      <source>Ruled surface</source>
      <translation>Regelfläche</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="27"/>
      <source>Closed</source>
      <translation>Geschlossen</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="34"/>
      <source>Profile</source>
      <translation>Profil</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="42"/>
      <source>Object</source>
      <translation>Objekt</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="65"/>
      <source>Add Section</source>
      <translation>Schnitt hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="78"/>
      <source>Remove Section</source>
      <translation>Schnitt entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="103"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.ui" line="120"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="50"/>
      <source>Loft parameters</source>
      <translation>Ausformungs-Parameter</translation>
    </message>
    <message>
      <location filename="../../TaskLoftParameters.cpp" line="72"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskMirroredParameters</name>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="22"/>
      <source>Add feature</source>
      <translation>Element hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="32"/>
      <source>Remove feature</source>
      <translation>Element entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="44"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="56"/>
      <source>Plane</source>
      <translation>Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="70"/>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.ui" line="79"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.cpp" line="101"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskMirroredParameters.cpp" line="245"/>
      <source>Error</source>
      <translation>Fehlermeldungen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskMultiTransformParameters</name>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="22"/>
      <source>Add feature</source>
      <translation>Element hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="32"/>
      <source>Remove feature</source>
      <translation>Element entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="44"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="54"/>
      <source>Transformations</source>
      <translation>Transformationen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.ui" line="71"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="73"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="86"/>
      <source>Edit</source>
      <translation>Bearbeiten</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="90"/>
      <source>Delete</source>
      <translation>Löschen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="94"/>
      <source>Add mirrored transformation</source>
      <translation>Spiegelung hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="98"/>
      <source>Add linear pattern</source>
      <translation>Lineares Muster hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="102"/>
      <source>Add polar pattern</source>
      <translation>Polares Muster hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="106"/>
      <source>Add scaled transformation</source>
      <translation>Skalierte Transformation hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="110"/>
      <source>Move up</source>
      <translation>Nach oben verschieben</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="114"/>
      <source>Move down</source>
      <translation>Nach unten verschieben</translation>
    </message>
    <message>
      <location filename="../../TaskMultiTransformParameters.cpp" line="141"/>
      <source>Right-click to add</source>
      <translation>Hinzufügen mittels Rechtsklick</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPadParameters</name>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="40"/>
      <source>Pad parameters</source>
      <translation>Parameter der Aufpolsterung</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="42"/>
      <source>Offset from face at which pad will end</source>
      <translation>Abstand zur Fläche, an der der Block endet</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="43"/>
      <source>Reverses pad direction</source>
      <translation>Richtung der Aufpolsterung umdrehen</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="72"/>
      <source>Dimension</source>
      <translation>Abmessung</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="73"/>
      <source>To last</source>
      <translation>Zur Letzten</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="74"/>
      <source>To first</source>
      <translation>Bis zur dichtesten Objektbegrenzung</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="75"/>
      <source>Up to face</source>
      <translation>Bis zu Oberfläche</translation>
    </message>
    <message>
      <location filename="../../TaskPadParameters.cpp" line="76"/>
      <source>Two dimensions</source>
      <translation>Zwei Längen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPadPocketParameters</name>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="22"/>
      <source>Type</source>
      <translation>Typ</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="30"/>
      <source>Dimension</source>
      <translation>Abmessung</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="38"/>
      <source>Length</source>
      <translation>Länge</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="58"/>
      <source>Offset to face</source>
      <translation>Abstand zur Fläche</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="77"/>
      <source>Direction</source>
      <translation>Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="85"/>
      <source>Direction/edge:</source>
      <translation>Richtung/Kante:</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="92"/>
      <source>Set a direction or select an edge
from the model as reference</source>
      <translation>Eine Ausrichtung vorgeben oder eine Kante
des Modells als Referenz auswählen</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="97"/>
      <source>Sketch normal</source>
      <translation>Skizzennormale</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="102"/>
      <source>Select reference...</source>
      <translation>Referenz auswählen...</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="107"/>
      <source>Custom direction</source>
      <translation>Benutzerdefinierte Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="117"/>
      <source>Show direction</source>
      <translation>Richtung anzeigen</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="127"/>
      <source>Use custom vector for pad direction, otherwise
the sketch plane's normal vector will be used</source>
      <translation>Benutzerdefinierten Vektor für die Richtung der Aufpolsterung verwenden, andernfalls wird
der Normalenvektor der Skizze verwendet</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="140"/>
      <source>x</source>
      <translation>x</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="147"/>
      <source>x-component of direction vector</source>
      <translation>X-Komponente des Richtungsvektors</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="169"/>
      <source>y</source>
      <translation>y</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="176"/>
      <source>y-component of direction vector</source>
      <translation>Y-Komponente des Richtungsvektors</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="198"/>
      <source>z</source>
      <translation>z</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="205"/>
      <source>z-component of direction vector</source>
      <translation>Z-Komponente des Richtungsvektors</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="236"/>
      <source>If unchecked, the length will be
measured along the specified direction</source>
      <translation>Wenn abgewählt, wird die Länge
entlang der angegebenen Richtung gemessen</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="240"/>
      <source>Length along sketch normal</source>
      <translation>Länge entlang der Skizzennormalen</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="253"/>
      <source>Applies length symmetrically to sketch plane</source>
      <translation>Längen symmetrisch zur Skizzenebene</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="256"/>
      <source>Symmetric to plane</source>
      <translation>Symmetrisch zu einer Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="263"/>
      <source>Reversed</source>
      <translation>Umgekehrt</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="272"/>
      <location filename="../../TaskPadPocketParameters.ui" line="317"/>
      <source>Angle to taper the extrusion</source>
      <translation>Winkel zum Abschrägen der Extrusion</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="275"/>
      <source>Taper angle</source>
      <translation>Schrägungswinkel</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="296"/>
      <source>2nd length</source>
      <translation>Zweite Länge</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="320"/>
      <source>2nd taper angle</source>
      <translation>2. Schrägungswinkel</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="341"/>
      <source>Face</source>
      <translation>Fläche</translation>
    </message>
    <message>
      <location filename="../../TaskPadPocketParameters.ui" line="360"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeOrientation</name>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="22"/>
      <source>Orientation mode</source>
      <translation>Ausrichtungsmodus</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="36"/>
      <source>Standard</source>
      <translation>Standard</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="41"/>
      <source>Fixed</source>
      <translation>Fixiert</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="46"/>
      <source>Frenet</source>
      <translation>Frenet</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="51"/>
      <source>Auxiliary</source>
      <translation>Zusatz</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="56"/>
      <source>Binormal</source>
      <translation>Binormale</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="76"/>
      <source>Curvelinear equivalence</source>
      <translation>Gekrümmte Äquivalenz</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="83"/>
      <source>Profile</source>
      <translation>Profil</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="91"/>
      <source>Object</source>
      <translation>Objekt</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="125"/>
      <source>Add Edge</source>
      <translation>Kante hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="144"/>
      <source>Remove Edge</source>
      <translation>Kante entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="166"/>
      <source>Set the constant binormal vector used to calculate the profiles orientation</source>
      <translation>Den konstanten binormalen Vektor einstellen, der zur Berechnung der Profilorientierung dient</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="190"/>
      <source>X</source>
      <translation>X</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="197"/>
      <source>Y</source>
      <translation>Y</translation>
    </message>
    <message>
      <location filename="../../TaskPipeOrientation.ui" line="204"/>
      <source>Z</source>
      <translation>Z</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="541"/>
      <source>Section orientation</source>
      <translation>Ausrichtung des Abschnitts</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="567"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeParameters</name>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="20"/>
      <source>Profile</source>
      <translation>Profil</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="28"/>
      <location filename="../../TaskPipeParameters.ui" line="93"/>
      <source>Object</source>
      <translation>Objekt</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="51"/>
      <source>Corner Transition</source>
      <translation>Eckübergang</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="65"/>
      <source>Transformed</source>
      <translation>Transformiert</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="70"/>
      <source>Right Corner</source>
      <translation>Rechte Ecke</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="75"/>
      <source>Round Corner</source>
      <translation>Runde Ecke</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="85"/>
      <source>Path to sweep along</source>
      <translation>Pfad der Austragung</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="119"/>
      <source>Add Edge</source>
      <translation>Kante hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.ui" line="138"/>
      <source>Remove Edge</source>
      <translation>Kante entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="69"/>
      <source>Pipe parameters</source>
      <translation>Rohr-Parameter</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="85"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="425"/>
      <location filename="../../TaskPipeParameters.cpp" line="527"/>
      <source>Input error</source>
      <translation>Eingabefehler</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="425"/>
      <source>No active body</source>
      <translation>Kein aktiver Körper</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPipeScaling</name>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="22"/>
      <source>Transform mode</source>
      <translation>Transformationsmodus</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="36"/>
      <source>Constant</source>
      <translation>Konstant</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="41"/>
      <source>Multisection</source>
      <translation>Mehrere Abschnitte</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="64"/>
      <source>Add Section</source>
      <translation>Schnitt hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="77"/>
      <source>Remove Section</source>
      <translation>Schnitt entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPipeScaling.ui" line="102"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="809"/>
      <source>Section transformation</source>
      <translation>Abschnitt Transformation</translation>
    </message>
    <message>
      <location filename="../../TaskPipeParameters.cpp" line="825"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPocketParameters</name>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="40"/>
      <source>Pocket parameters</source>
      <translation>Parameter der Vertiefung</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="43"/>
      <source>Offset from face at which pocket will end</source>
      <translation>Abstand zur Fläche, an der die Tasche endet</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="44"/>
      <source>Reverses pocket direction</source>
      <translation>Kehrt die Richtung der Tasche um</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="73"/>
      <source>Dimension</source>
      <translation>Abmessung</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="74"/>
      <source>Through all</source>
      <translation>Durch alles</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="75"/>
      <source>To first</source>
      <translation>Bis zur dichtesten Objektbegrenzung</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="76"/>
      <source>Up to face</source>
      <translation>Bis zu Oberfläche</translation>
    </message>
    <message>
      <location filename="../../TaskPocketParameters.cpp" line="77"/>
      <source>Two dimensions</source>
      <translation>Zwei Längen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPolarPatternParameters</name>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="22"/>
      <source>Add feature</source>
      <translation>Element hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="32"/>
      <source>Remove feature</source>
      <translation>Element entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="44"/>
      <source>List can be reordered by dragging</source>
      <translation>Liste kann durch Ziehen neu sortiert werden</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="56"/>
      <source>Axis</source>
      <translation>Achse</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="68"/>
      <source>Reverse direction</source>
      <translation>Umgekehrte Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="77"/>
      <source>Angle</source>
      <translation>Winkel</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="107"/>
      <source>Occurrences</source>
      <translation>Vorkommen</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="121"/>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.ui" line="130"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.cpp" line="112"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskPolarPatternParameters.cpp" line="333"/>
      <source>Error</source>
      <translation>Fehlermeldungen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskPrimitiveParameters</name>
    <message>
      <location filename="../../TaskPrimitiveParameters.cpp" line="893"/>
      <source>Attachment</source>
      <translation>Anhang</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskRevolutionParameters</name>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="22"/>
      <source>Axis:</source>
      <translation>Achse:</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="30"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="139"/>
      <source>Base X axis</source>
      <translation>Basis X-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="35"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="140"/>
      <source>Base Y axis</source>
      <translation>Basis Y-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="40"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="141"/>
      <source>Base Z axis</source>
      <translation>Basis Z-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="45"/>
      <source>Horizontal sketch axis</source>
      <translation>Horizontale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="50"/>
      <source>Vertical sketch axis</source>
      <translation>Vertikale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="55"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="148"/>
      <source>Select reference...</source>
      <translation>Referenz auswählen...</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="67"/>
      <source>Angle:</source>
      <translation>Winkel:</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="101"/>
      <source>Symmetric to plane</source>
      <translation>Symmetrisch zu einer Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="108"/>
      <source>Reversed</source>
      <translation>Umgekehrt</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.ui" line="122"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="49"/>
      <source>Revolution parameters</source>
      <translation>Drehteil-Parameter</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskScaledParameters</name>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="22"/>
      <source>Add feature</source>
      <translation>Element hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="32"/>
      <source>Remove feature</source>
      <translation>Element entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="53"/>
      <source>Factor</source>
      <translation>Faktor</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="67"/>
      <source>Occurrences</source>
      <translation>Vorkommen</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="81"/>
      <source>OK</source>
      <translation>OK</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.ui" line="90"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskScaledParameters.cpp" line="92"/>
      <source>Remove</source>
      <translation>Entfernen</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskShapeBinder</name>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="22"/>
      <source>Object</source>
      <translation>Objekt</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="48"/>
      <source>Add Geometry</source>
      <translation>Geometrie hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.ui" line="67"/>
      <source>Remove Geometry</source>
      <translation>Geometrie entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskShapeBinder.cpp" line="59"/>
      <source>Datum shape parameters</source>
      <translation>Bezugsparameter</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskSketchBasedParameters</name>
    <message>
      <location filename="../../TaskSketchBasedParameters.cpp" line="160"/>
      <source>Face</source>
      <translation>Fläche</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskThicknessParameters</name>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="22"/>
      <location filename="../../TaskThicknessParameters.ui" line="36"/>
      <location filename="../../TaskThicknessParameters.cpp" line="136"/>
      <source>Click button to enter selection mode,
click again to end selection</source>
      <translation>Klicken Sie auf den Button um in den Auswahl-Modus zu gelangen.
Nochmaliges Klicken beendet den Auswahl-Modus.</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="26"/>
      <source>Add face</source>
      <translation>Fläche hinzufügen</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="40"/>
      <source>Remove face</source>
      <translation>Fläche entfernen</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="52"/>
      <source>- select an item to highlight it
- double-click on an item to see the features</source>
      <translation>- Wählen Sie ein Element um es zu markieren
- Doppelklicken Sie auf ein Element, um das Merkmal zu sehen</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="65"/>
      <source>Thickness</source>
      <translation>Dicke</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="94"/>
      <source>Mode</source>
      <translation>Modus</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="102"/>
      <source>Skin</source>
      <translation>Oberfläche</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="107"/>
      <source>Pipe</source>
      <translation>Rohr</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="112"/>
      <source>Recto Verso</source>
      <translation>Recto Verso</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="120"/>
      <source>Join Type</source>
      <translation>Verbindungstyp</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="128"/>
      <source>Arc</source>
      <translation>Kreisbogen</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="133"/>
      <location filename="../../TaskThicknessParameters.ui" line="143"/>
      <source>Intersection</source>
      <translation>Schnitt</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.ui" line="150"/>
      <source>Make thickness inwards</source>
      <translation>Dicke nach innen auftragen</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.cpp" line="146"/>
      <location filename="../../TaskThicknessParameters.cpp" line="148"/>
      <location filename="../../TaskThicknessParameters.cpp" line="213"/>
      <location filename="../../TaskThicknessParameters.cpp" line="215"/>
      <source>There must be at least one item</source>
      <translation>Es muss mindestens ein Element vorhanden sein</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.cpp" line="181"/>
      <source>Selection error</source>
      <translation>Auswahlfehler</translation>
    </message>
    <message>
      <location filename="../../TaskThicknessParameters.cpp" line="181"/>
      <source>At least one item must be kept.</source>
      <translation>Es muss mindestens ein Element behalten werden.</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskTransformedMessages</name>
    <message>
      <location filename="../../TaskTransformedMessages.cpp" line="37"/>
      <source>Transformed feature messages</source>
      <translation>Meldungen über die Transformation</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::TaskTransformedParameters</name>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="250"/>
      <source>Normal sketch axis</source>
      <translation>Senkrecht zur Skizze</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="251"/>
      <source>Vertical sketch axis</source>
      <translation>Vertikale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="252"/>
      <source>Horizontal sketch axis</source>
      <translation>Horizontale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="254"/>
      <location filename="../../TaskTransformedParameters.cpp" line="290"/>
      <source>Construction line %1</source>
      <translation>Konstruktionslinie %1</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="268"/>
      <source>Base X axis</source>
      <translation>Basis X-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="269"/>
      <source>Base Y axis</source>
      <translation>Basis Y-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="270"/>
      <source>Base Z axis</source>
      <translation>Basis Z-Achse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="277"/>
      <location filename="../../TaskTransformedParameters.cpp" line="313"/>
      <source>Select reference...</source>
      <translation>Referenz auswählen...</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="304"/>
      <source>Base XY plane</source>
      <translation>Basis XY-Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="305"/>
      <source>Base YZ plane</source>
      <translation>Basis YZ-Ebene</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="306"/>
      <source>Base XZ plane</source>
      <translation>Basis XZ-Ebene</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderBody</name>
    <message>
      <location filename="../../ViewProviderBody.cpp" line="133"/>
      <source>Toggle active body</source>
      <translation>Aktiven Körper umschalten</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderChamfer</name>
    <message>
      <location filename="../../ViewProviderChamfer.h" line="41"/>
      <source>Chamfer parameters</source>
      <translation>Parameter der Fase</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderDatum</name>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="111"/>
      <source>Datum Plane parameters</source>
      <translation>Parameter der Bezugsebene</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="116"/>
      <source>Datum Line parameters</source>
      <translation>Parameter der Bezugslinie</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="121"/>
      <source>Datum Point parameters</source>
      <translation>Parameter des Bezugspunktes</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="126"/>
      <source>Local Coordinate System parameters</source>
      <translation>Parameter des lokalen Koordinatensystems</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderDraft</name>
    <message>
      <location filename="../../ViewProviderDraft.h" line="42"/>
      <source>Draft parameters</source>
      <translation>Parameter der Formschräge</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderFillet</name>
    <message>
      <location filename="../../ViewProviderFillet.h" line="41"/>
      <source>Fillet parameters</source>
      <translation>Parameter der Rundung</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderLinearPattern</name>
    <message>
      <location filename="../../ViewProviderLinearPattern.h" line="38"/>
      <source>LinearPattern parameters</source>
      <translation>Parameter des linearen Musters</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderMultiTransform</name>
    <message>
      <location filename="../../ViewProviderMultiTransform.h" line="38"/>
      <source>MultiTransform parameters</source>
      <translation>Parameter der Mehrfach-Transformation</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderPolarPattern</name>
    <message>
      <location filename="../../ViewProviderPolarPattern.h" line="38"/>
      <source>PolarPattern parameters</source>
      <translation>PolarMuster-Parameter</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderScaled</name>
    <message>
      <location filename="../../ViewProviderScaled.h" line="38"/>
      <source>Scaled parameters</source>
      <translation>Skalierte Parameter</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGui::ViewProviderThickness</name>
    <message>
      <location filename="../../ViewProviderThickness.h" line="41"/>
      <source>Thickness parameters</source>
      <translation>Parameter der Wandstärke</translation>
    </message>
  </context>
  <context>
    <name>PartDesignGuii::ViewProviderMirrored</name>
    <message>
      <location filename="../../ViewProviderMirrored.h" line="38"/>
      <source>Mirrored parameters</source>
      <translation>Gespiegelte Parameter</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_CompPrimitiveAdditive</name>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="200"/>
      <source>Create an additive box by its width, height, and length</source>
      <translation>Erzeuge einen hinzuzufügenden Quader mit Angabe von Breite, Höhe und Länge</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="204"/>
      <source>Create an additive cylinder by its radius, height, and angle</source>
      <translation>Erzeuge einen hinzuzufügenden Zylinder mit Angabe von Radius, Höhe und Winkel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="208"/>
      <source>Create an additive sphere by its radius and various angles</source>
      <translation>Erzeuge eine hinzuzufügende Kugel durch Angabe des Radius und verschiedener Winkel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="212"/>
      <source>Create an additive cone</source>
      <translation>Erzeugen eines hinzuzufügenden Kegels</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="216"/>
      <source>Create an additive ellipsoid</source>
      <translation>Erzeuge ein hinzuzufügendes Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="220"/>
      <source>Create an additive torus</source>
      <translation>Erzeuge einen hinzuzufügenden Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="224"/>
      <source>Create an additive prism</source>
      <translation>Erzeuge ein hinzuzufügendes Prisma</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="228"/>
      <source>Create an additive wedge</source>
      <translation>Erzeuge einen hinzuzufügenden Keil</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_CompPrimitiveSubtractive</name>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="356"/>
      <source>Create a subtractive box by its width, height and length</source>
      <translation>Erzeuge einen abzuziehenden Quader durch Angabe von Breite, Höhe und Länge</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="360"/>
      <source>Create a subtractive cylinder by its radius, height and angle</source>
      <translation>Erzeuge einen abzuziehenden Zylinder durch Angabe von Radius, Höhe und Winkel</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="364"/>
      <source>Create a subtractive sphere by its radius and various angles</source>
      <translation>Erzeuge eine abzuziehende Kugel durch Angabe des Radius und verschiedenen Winkeln</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="368"/>
      <source>Create a subtractive cone</source>
      <translation>Erzeuge einen abzuziehenden Konus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="372"/>
      <source>Create a subtractive ellipsoid</source>
      <translation>Erzeuge ein abzuziehendes Ellipsoid</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="376"/>
      <source>Create a subtractive torus</source>
      <translation>Erzeuge einen abzuziehenden Torus</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="380"/>
      <source>Create a subtractive prism</source>
      <translation>Erzeuge ein abzuziehendes Prisma</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="384"/>
      <source>Create a subtractive wedge</source>
      <translation>Erzeuge einen abzuziehenden Keil</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_InvoluteGear</name>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="57"/>
      <source>Involute gear...</source>
      <translation>Evolventenrad...</translation>
    </message>
    <message>
      <location filename="../../../InvoluteGearFeature.py" line="61"/>
      <source>Creates or edit the involute gear definition.</source>
      <translation>Erstellt oder bearbeitet die Definition eines Evolventenzahnrades.</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_MoveFeature</name>
    <message>
      <location filename="../../CommandBody.cpp" line="728"/>
      <source>Select body</source>
      <translation>Körper wählen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="729"/>
      <source>Select a body from the list</source>
      <translation>Einen Körper aus der Liste wählen</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_MoveFeatureInTree</name>
    <message>
      <location filename="../../CommandBody.cpp" line="881"/>
      <source>Select feature</source>
      <translation>Element auswählen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="882"/>
      <source>Select a feature from the list</source>
      <translation>Ein Objekt aus der Liste wählen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="953"/>
      <source>Move tip</source>
      <translation>Arbeitsposition versetzen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="954"/>
      <source>The moved feature appears after the currently set tip.</source>
      <translation>Das bewegte Objekt erscheint hinter der aktuell gesetzten Arbeitsposition.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="955"/>
      <source>Do you want the last feature to be the new tip?</source>
      <translation>Soll das letzte Objekt die neue Arbeitsposition sein?</translation>
    </message>
  </context>
  <context>
    <name>PartDesign_Sprocket</name>
    <message>
      <location filename="../../../SprocketFeature.py" line="62"/>
      <source>Sprocket...</source>
      <translation>Kettenrad...</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.py" line="66"/>
      <source>Creates or edit the sprocket definition.</source>
      <translation>Erstellt oder bearbeitet die Kettenraddefinition.</translation>
    </message>
  </context>
  <context>
    <name>QObject</name>
    <message>
      <location filename="../../Command.cpp" line="138"/>
      <source>Invalid selection</source>
      <translation>Ungültige Auswahl</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="138"/>
      <source>There are no attachment modes that fit selected objects. Select something else.</source>
      <translation>Es gibt keine Anhang-Modi, die zu den ausgewählten Objekte passen. Wähle etwas anderes.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="144"/>
      <location filename="../../Command.cpp" line="147"/>
      <location filename="../../Command.cpp" line="149"/>
      <source>Error</source>
      <translation>Fehlermeldungen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="144"/>
      <source>There is no active body. Please make a body active before inserting a datum entity.</source>
      <translation>Kein aktiver Körper. Bitte aktiviere einen Körper vor dem Einfügen eines Bezugs.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="408"/>
      <source>Sub-Shape Binder</source>
      <translation>Formbinder für Teilobjekt</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="590"/>
      <source>Several sub-elements selected</source>
      <translation>Mehrere Unter-Elemente selektiert</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="591"/>
      <source>You have to select a single face as support for a sketch!</source>
      <translation>Sie müssen eine einzelne Fläche als Auflage für eine Skizze auswählen!</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="601"/>
      <source>No support face selected</source>
      <translation>Keine Fläche als Auflage selektiert</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="602"/>
      <source>You have to select a face as support for a sketch!</source>
      <translation>Sie müssen eine Fläche als Auflage für eine Skizze auswählen!</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="611"/>
      <source>No planar support</source>
      <translation>Keine ebene Auflage</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="612"/>
      <source>You need a planar face as support for a sketch!</source>
      <translation>Sie benötigen eine ebene Fläche als Auflage für eine Skizze!</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="797"/>
      <source>No valid planes in this document</source>
      <translation>Keine gültigen Ebenen in diesem Dokument</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="798"/>
      <source>Please create a plane first or select a face to sketch on</source>
      <translation>Zum Erzeugen einer Skizze zuerst eine Ebene im Koordinatensystem oder auf einem Körper wählen</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="811"/>
      <location filename="../../Command.cpp" line="1226"/>
      <location filename="../../Command.cpp" line="2225"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="73"/>
      <location filename="../../ViewProviderDatum.cpp" line="246"/>
      <location filename="../../ViewProvider.cpp" line="98"/>
      <location filename="../../ViewProviderShapeBinder.cpp" line="98"/>
      <location filename="../../ViewProviderHole.cpp" line="79"/>
      <location filename="../../ViewProviderBoolean.cpp" line="80"/>
      <source>A dialog is already open in the task panel</source>
      <translation>Es ist bereits ein Dialog in der Aufgabenleiste geöffnet</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="812"/>
      <location filename="../../Command.cpp" line="1227"/>
      <location filename="../../Command.cpp" line="2226"/>
      <location filename="../../ViewProviderPrimitive.cpp" line="74"/>
      <location filename="../../ViewProviderDatum.cpp" line="247"/>
      <location filename="../../ViewProvider.cpp" line="99"/>
      <location filename="../../ViewProviderShapeBinder.cpp" line="99"/>
      <location filename="../../ViewProviderHole.cpp" line="80"/>
      <location filename="../../ViewProviderBoolean.cpp" line="81"/>
      <source>Do you want to close this dialog?</source>
      <translation>Möchten Sie diesen Dialog zu schließen?</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1106"/>
      <source>Cannot use this command as there is no solid to subtract from.</source>
      <translation>Dieser Befehl kann nicht verwendet werden, da kein Festkörper vorhanden ist, von dem etwas abgezogen werden kann.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1107"/>
      <source>Ensure that the body contains a feature before attempting a subtractive command.</source>
      <translation>Bitte sicherstellen, dass der Körper ein Objekt enthält, bevor ein subtraktiver Befehl angewendet wird.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1128"/>
      <source>Cannot use selected object. Selected object must belong to the active body</source>
      <translation>Ausgewähltes Objekt kann nicht verwendet werden. Ausgewähltes Objekt muss zum aktiven Körper gehören</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1129"/>
      <source>Consider using a ShapeBinder or a BaseFeature to reference external geometry in a body.</source>
      <translation>Ziehe die Benutzung eines Formbinders oder eines BasisMerkmals in Betracht um externe Geometrie in einem Körper zu referenzieren.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1151"/>
      <source>No sketch to work on</source>
      <translation>Fehlende Skizze</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1152"/>
      <source>No sketch is available in the document</source>
      <translation>Keine Skizze im Dokument vorhanden</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1890"/>
      <location filename="../../Command.cpp" line="1894"/>
      <location filename="../../Command.cpp" line="1920"/>
      <location filename="../../Command.cpp" line="1950"/>
      <source>Wrong selection</source>
      <translation>Falsche Auswahl</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1891"/>
      <source>Select an edge, face, or body.</source>
      <translation>Kante, Fläche oder Körper auswählen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1895"/>
      <source>Select an edge, face, or body from a single body.</source>
      <translation>Kante, Fläche oder Körper eines einzelnen Körpers auswählen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1899"/>
      <location filename="../../Command.cpp" line="2252"/>
      <source>Selection is not in Active Body</source>
      <translation>Auswahl ist nicht im aktiven Körper</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1900"/>
      <source>Select an edge, face, or body from an active body.</source>
      <translation>Kante, Fläche oder Körper eines aktiven Körpers auswählen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1910"/>
      <source>Wrong object type</source>
      <translation>Falscher Objekt-Typ</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1911"/>
      <source>%1 works only on parts.</source>
      <translation>%1 funktioniert nur bei Teilen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1921"/>
      <source>Shape of the selected Part is empty</source>
      <translation>Gewähltes Teil ist hohl</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="1951"/>
      <source> not possible on selected faces/edges.</source>
      <translation> Auf gewählter Fläche oder Kante nicht möglich</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2243"/>
      <source>No valid features in this document</source>
      <translation>Keine gültigen Elemente in diesem Dokument</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2244"/>
      <source>Please create a feature first.</source>
      <translation>Bitte zuerst ein Element erstellen.</translation>
    </message>
    <message>
      <location filename="../../Command.cpp" line="2253"/>
      <source>Please select only one feature in an active body.</source>
      <translation>Bitte nur ein Element in einem aktiven Körper auswählen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="67"/>
      <source>Part creation failed</source>
      <translation>Erzeugen des Teils ist fehlgeschlagen</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="68"/>
      <source>Failed to create a part object.</source>
      <translation>Konnte kein Part-Objekt erstellen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="115"/>
      <location filename="../../CommandBody.cpp" line="120"/>
      <location filename="../../CommandBody.cpp" line="133"/>
      <location filename="../../CommandBody.cpp" line="182"/>
      <source>Bad base feature</source>
      <translation>Ungeeignetes Basis-Element</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="116"/>
      <source>Body can't be based on a PartDesign feature.</source>
      <translation>Körper kann nicht auf einem PartDesign-Element basieren.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="121"/>
      <source>%1 already belongs to a body, can't use it as base feature for another body.</source>
      <translation>%1 gehört bereits zu einem Körper, kann nicht als Basis-Element für einen anderen Körper verwendet werden.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="134"/>
      <source>Base feature (%1) belongs to other part.</source>
      <translation>Das Basis-Element (%1) gehört zu einer anderen Teil.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="158"/>
      <source>The selected shape consists of multiple solids.
This may lead to unexpected results.</source>
      <translation>Die ausgewählte Form besteht aus mehreren Volumenkörpern.
Dies kann zu unerwarteten Ergebnissen führen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="162"/>
      <source>The selected shape consists of multiple shells.
This may lead to unexpected results.</source>
      <translation>Die ausgewählte Form besteht aus mehreren Hüllflächen.
Dies kann zu unerwarteten Ergebnissen führen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="166"/>
      <source>The selected shape consists of only a shell.
This may lead to unexpected results.</source>
      <translation>Die ausgewählte Form besteht nur aus einer Hülle. Dies kann zu unerwarteten Ergebnissen führen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="170"/>
      <source>The selected shape consists of multiple solids or shells.
This may lead to unexpected results.</source>
      <translation>Die ausgewählte Form besteht aus mehreren Volumenkörpern oder Hüllen. Dies kann zu unerwarteten Ergebnissen führen.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="175"/>
      <source>Base feature</source>
      <translation>Basis-Element</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="183"/>
      <source>Body may be based on no more than one feature.</source>
      <translation>Ein Körper kann nicht auf mehr als einem Element basieren.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="339"/>
      <source>Nothing to migrate</source>
      <translation>Nichts zu migrieren</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="340"/>
      <source>No PartDesign features found that don't belong to a body. Nothing to migrate.</source>
      <translation>Keine PartDesign-Elemente gefunden, die nicht zu einem Körper gehören. Nichts zu migrieren.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="488"/>
      <source>Sketch plane cannot be migrated</source>
      <translation>Skizzen-Ebene kann nicht migriert werden</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="489"/>
      <source>Please edit '%1' and redefine it to use a Base or Datum plane as the sketch plane.</source>
      <translation>Bitte ändern Sie '%1' und verwenden eine Basis- oder Bezugsebene als Zeichnungsebene.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="551"/>
      <location filename="../../CommandBody.cpp" line="555"/>
      <location filename="../../CommandBody.cpp" line="560"/>
      <location filename="../../CommandBody.cpp" line="853"/>
      <location filename="../../CommandBody.cpp" line="860"/>
      <source>Selection error</source>
      <translation>Auswahlfehler</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="552"/>
      <source>Select exactly one PartDesign feature or a body.</source>
      <translation>Wählen Sie genau ein PartDesign-Objekt oder einen Körper.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="556"/>
      <source>Couldn't determine a body for the selected feature '%s'.</source>
      <translation>Einen Körper für das ausgewählte Objekt '%s' konnte nicht bestimmt werden.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="561"/>
      <source>Only a solid feature can be the tip of a body.</source>
      <translation>Nur ein Festkörperobjekt kann als Arbeitsposition eines Körpers festgelegt werden.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="679"/>
      <location filename="../../CommandBody.cpp" line="701"/>
      <location filename="../../CommandBody.cpp" line="716"/>
      <source>Features cannot be moved</source>
      <translation>Objekte können nicht verschoben werden</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="680"/>
      <source>Some of the selected features have dependencies in the source body</source>
      <translation>Einige der gewählten Objekte sind vom Quell-Körper abhängig</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="702"/>
      <source>Only features of a single source Body can be moved</source>
      <translation>Nur Objekte eines einzigen Ursprungskörpers können verschoben werden</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="717"/>
      <source>There are no other bodies to move to</source>
      <translation>Es gibt keine anderen Körper zu verschieben</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="854"/>
      <source>Impossible to move the base feature of a body.</source>
      <translation>Es ist nicht möglich, das Basis-Objekt des Körpers zu verschieben.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="861"/>
      <source>Select one or more features from the same body.</source>
      <translation>Auswählen eines oder mehrerer Objekte desselben Körpers.</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="874"/>
      <source>Beginning of the body</source>
      <translation>Anfang des Körpers</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="939"/>
      <source>Dependency violation</source>
      <translation>Abhängigkeitsverletzung</translation>
    </message>
    <message>
      <location filename="../../CommandBody.cpp" line="940"/>
      <source>Early feature must not depend on later feature.

</source>
      <translation>Ein frühes Merkmal darf nicht von einem späteren Merkmal abhängen.

</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="269"/>
      <source>No previous feature found</source>
      <translation>Kein vorheriges Objekt gefunden</translation>
    </message>
    <message>
      <location filename="../../CommandPrimitive.cpp" line="270"/>
      <source>It is not possible to create a subtractive feature without a base feature available</source>
      <translation>Es ist nicht möglich, ein abzuziehendes Objekt ohne ein Basisobjekt zu erstellen</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="287"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="124"/>
      <source>Vertical sketch axis</source>
      <translation>Vertikale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedParameters.cpp" line="288"/>
      <location filename="../../TaskRevolutionParameters.cpp" line="125"/>
      <source>Horizontal sketch axis</source>
      <translation>Horizontale Skizzenachse</translation>
    </message>
    <message>
      <location filename="../../TaskRevolutionParameters.cpp" line="127"/>
      <source>Construction line %1</source>
      <translation>Konstruktionslinie %1</translation>
    </message>
    <message>
      <location filename="../../TaskSketchBasedParameters.cpp" line="76"/>
      <source>Face</source>
      <translation>Fläche</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="122"/>
      <source>In order to use PartDesign you need an active Body object in the document. Please make one active (double click) or create one.

If you have a legacy document with PartDesign objects without Body, use the migrate function in PartDesign to put them into a Body.</source>
      <translation>Um PartDesign verwenden zu können, ist ein aktiver Körper im Dokument erforderlich. Bitte einen Körper aktivieren (Doppelklick) oder einen neuen erstellen.

Wenn ein älteres Dokument mit PartDesign-Objekten ohne Körper vorliegt, wird die PartDesign-Funktion Migrieren verwendet, um sie in einen Körper abzulegen.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="169"/>
      <source>Active Body Required</source>
      <translation>Aktiver Körper erforderlich</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="170"/>
      <source>To create a new PartDesign object, there must be an active Body object in the document. Please make one active (double click) or create a new Body.</source>
      <translation>Um ein neues PartDesign-Objekt zu erstellen, muss ein aktiver Körper in diesem Dokument vorhanden sein.
Bitte aktivieren (Doppelklick) Sie einen oder erstellen einen neuen Körper.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="205"/>
      <source>Feature is not in a body</source>
      <translation>Objekt ist nicht Teil eines Körpers</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="206"/>
      <source>In order to use this feature it needs to belong to a body object in the document.</source>
      <translation>Um diese Funktion verwenden zu können, muss es Teil eines Körpers im Dokument sein.</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="238"/>
      <source>Feature is not in a part</source>
      <translation>Objekt ist nicht Teil einer Baugruppe</translation>
    </message>
    <message>
      <location filename="../../Utils.cpp" line="239"/>
      <source>In order to use this feature it needs to belong to a part object in the document.</source>
      <translation>Um diese Funktion verwenden zu können, muss es Teil einer Baugruppe im Dokument sein.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="50"/>
      <location filename="../../ViewProvider.cpp" line="65"/>
      <location filename="../../ViewProviderShapeBinder.cpp" line="204"/>
      <location filename="../../ViewProviderTransformed.cpp" line="65"/>
      <location filename="../../ViewProviderMultiTransform.cpp" line="42"/>
      <source>Edit %1</source>
      <translation>%1 bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProvider.cpp" line="78"/>
      <source>Set colors...</source>
      <translation>Legen Sie Farben fest...</translation>
    </message>
    <message>
      <location filename="../../ViewProviderBoolean.cpp" line="64"/>
      <source>Edit boolean</source>
      <translation>Boolesche Operation ändern</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="110"/>
      <location filename="../../ViewProviderDatum.cpp" line="204"/>
      <source>Plane</source>
      <translation>Ebene</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="115"/>
      <location filename="../../ViewProviderDatum.cpp" line="200"/>
      <source>Line</source>
      <translation>Linie</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="120"/>
      <location filename="../../ViewProviderDatum.cpp" line="208"/>
      <source>Point</source>
      <translation>Punkt</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="125"/>
      <source>Coordinate System</source>
      <translation>Koordinatensystem</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDatum.cpp" line="225"/>
      <source>Edit datum</source>
      <translation>Bezug ändern</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="71"/>
      <source>Feature error</source>
      <translation>Objekt-Fehler</translation>
    </message>
    <message>
      <location filename="../../ViewProviderDressUp.cpp" line="72"/>
      <source>%1 misses a base feature.
This feature is broken and can't be edited.</source>
      <translation>%1 vermisst ein Basis-Objekt.
Dieses Objekt ist beschädigt und kann nicht bearbeitet werden.</translation>
    </message>
    <message>
      <location filename="../../ViewProviderGroove.cpp" line="48"/>
      <source>Edit groove</source>
      <translation>Nut bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHole.cpp" line="63"/>
      <source>Edit hole</source>
      <translation>Bohrung bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderLoft.cpp" line="70"/>
      <source>Edit loft</source>
      <translation>Ausformung bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPad.cpp" line="48"/>
      <source>Edit pad</source>
      <translation>Extrusion bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPipe.cpp" line="78"/>
      <source>Edit pipe</source>
      <translation>Rohr bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPocket.cpp" line="50"/>
      <source>Edit pocket</source>
      <translation>Tasche bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderPrimitive.cpp" line="59"/>
      <source>Edit primitive</source>
      <translation>Grundkörper bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderRevolution.cpp" line="48"/>
      <source>Edit revolution</source>
      <translation>Drehteil bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="199"/>
      <source>Edit shape binder</source>
      <translation>Formbinder bearbeiten</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="308"/>
      <source>Synchronize</source>
      <translation>Synchronisieren</translation>
    </message>
    <message>
      <location filename="../../ViewProviderShapeBinder.cpp" line="310"/>
      <source>Select bound object</source>
      <translation>Begrenztes Objekt auswählen</translation>
    </message>
    <message>
      <location filename="../../ViewProviderTransformed.cpp" line="169"/>
      <source>One transformed shape does not intersect support</source>
      <translation>Eine Transformation überschneidet die Basis nicht</translation>
    </message>
    <message>
      <location filename="../../ViewProviderTransformed.cpp" line="171"/>
      <source>%1 transformed shapes do not intersect support</source>
      <translation>%1 Transformationen überschneiden die Basis nicht</translation>
    </message>
    <message>
      <location filename="../../ViewProviderTransformed.cpp" line="181"/>
      <source>Transformation succeeded</source>
      <translation>Transformation erfolgreich</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="138"/>
      <source>The document "%1" you are editing was designed with an old version of PartDesign workbench.</source>
      <translation>Das Dokument "%1" welches Sie editieren, wurde mit der alten Version des PartDesign Workbench erstellt.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="141"/>
      <source>Do you want to migrate in order to use modern PartDesign features?</source>
      <translation>Möchten Sie migrieren, um neuere PartDesign-Funktionen zu nutzen?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="144"/>
      <source>The document "%1" seems to be either in the middle of the migration process from legacy PartDesign or have a slightly broken structure.</source>
      <translation>Das Dokument "%1" scheint entweder inmitten des Migrationsprozesses aus einem älteren PartDesign zu stammen oder hat eine defekte Struktur.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="148"/>
      <source>Do you want to make the migration automatically?</source>
      <translation>Möchten Sie die Migrierung automatisch durchführen?</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="150"/>
      <source>Note: If you choose to migrate you won't be able to edit the file with an older FreeCAD version.
If you refuse to migrate you won't be able to use new PartDesign features like Bodies and Parts. As a result you also won't be able to use your parts in the assembly workbench.
Although you will be able to migrate any moment later with 'Part Design -&gt; Migrate'.</source>
      <translation>Hinweis: Wenn Du Dich für die Migration entscheidest, kannst Du die Datei nicht mehr mit einer älteren FreeCAD-Version bearbeiten.
Wenn Du die Migration ablehnst, kannst Du keine neuen PartDesign-Funktionen wie Bodies und Parts verwenden. Die Teile können dann auch nicht in der Assembly-Workbench verwendet werden.
Du kannst die Teile später jederzeit mit 'Part Design -&gt; Migrieren...' migrieren.</translation>
    </message>
    <message>
      <location filename="../../WorkflowManager.cpp" line="159"/>
      <source>Migrate manually</source>
      <translation>Manuell migrieren</translation>
    </message>
    <message>
      <location filename="../../ViewProviderHelix.cpp" line="55"/>
      <source>Edit helix</source>
      <translation>Wendel bearbeiten</translation>
    </message>
  </context>
  <context>
    <name>SprocketParameter</name>
    <message>
      <location filename="../../../SprocketFeature.ui" line="14"/>
      <source>Sprocket parameter</source>
      <translation>Kettenradparameter</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="20"/>
      <source>Number of teeth:</source>
      <translation>Anzahl der Zähne:</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="40"/>
      <source>Sprocket Reference</source>
      <translation>Kettenradreferenz</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="48"/>
      <source>ANSI 25</source>
      <translation>ANSI 25</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="53"/>
      <source>ANSI 35</source>
      <translation>ANSI 35</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="58"/>
      <source>ANSI 41</source>
      <translation>ANSI 41</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="63"/>
      <source>ANSI 40</source>
      <translation>ANSI 40</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="68"/>
      <source>ANSI 50</source>
      <translation>ANSI 50</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="73"/>
      <source>ANSI 60</source>
      <translation>ANSI 60</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="78"/>
      <source>ANSI 80</source>
      <translation>ANSI 80</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="83"/>
      <source>ANSI 100</source>
      <translation>ANSI 100</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="88"/>
      <source>ANSI 120</source>
      <translation>ANSI 120</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="93"/>
      <source>ANSI 140</source>
      <translation>ANSI 140</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="98"/>
      <source>ANSI 160</source>
      <translation>ANSI 160</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="103"/>
      <source>ANSI 180</source>
      <translation>ANSI 180</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="108"/>
      <source>ANSI 200</source>
      <translation>ANSI 200</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="113"/>
      <source>ANSI 240</source>
      <translation>ANSI 240</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="118"/>
      <source>Bicycle with Derailleur</source>
      <translation>Bicycle with Derailleur</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="123"/>
      <source>Bicycle without Derailleur</source>
      <translation>Bicycle without Derailleur</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="128"/>
      <source>ISO 606 06B</source>
      <translation>ISO 606 06B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="133"/>
      <source>ISO 606 08B</source>
      <translation>ISO 606 08B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="138"/>
      <source>ISO 606 10B</source>
      <translation>ISO 606 10B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="143"/>
      <source>ISO 606 12B</source>
      <translation>ISO 606 12B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="148"/>
      <source>ISO 606 16B</source>
      <translation>ISO 606 16B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="153"/>
      <source>ISO 606 20B</source>
      <translation>ISO 606 20B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="158"/>
      <source>ISO 606 24B</source>
      <translation>ISO 606 24B</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="163"/>
      <source>Motorcycle 420</source>
      <translation>Motorcycle 420</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="168"/>
      <source>Motorcycle 425</source>
      <translation>Motorcycle 425</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="173"/>
      <source>Motorcycle 428</source>
      <translation>Motorcycle 428</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="178"/>
      <source>Motorcycle 520</source>
      <translation>Motorcycle 520</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="183"/>
      <source>Motorcycle 525</source>
      <translation>Motorcycle 525</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="188"/>
      <source>Motorcycle 530</source>
      <translation>Motorcycle 530</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="193"/>
      <source>Motorcycle 630</source>
      <translation>Motorcycle 630</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="201"/>
      <source>Chain Pitch:</source>
      <translation>Kettenteilung:</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="220"/>
      <source>0 in</source>
      <translation>0 in</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="248"/>
      <source>Roller Diameter:</source>
      <translation>Rollendurchmesser:</translation>
    </message>
    <message>
      <location filename="../../../SprocketFeature.ui" line="292"/>
      <source>Thickness:</source>
      <translation>Dicke:</translation>
    </message>
  </context>
  <context>
    <name>TaskHole</name>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="24"/>
      <source>Position</source>
      <translation>Position</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="35"/>
      <source>Face</source>
      <translation>Fläche</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="49"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="87"/>
      <source>Edge</source>
      <translation>Kante</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="63"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="101"/>
      <source>Distance</source>
      <translation>Abstand</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="137"/>
      <source>Type</source>
      <translation>Typ</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="145"/>
      <source>Through</source>
      <translation>Durchgehend</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="152"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="492"/>
      <source>Depth</source>
      <translation>Tiefe</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="161"/>
      <source>Threaded</source>
      <translation>Mit Gewinde versehen</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="168"/>
      <source>Countersink</source>
      <translation>Kegelsenkung</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="175"/>
      <source>Counterbore</source>
      <translation>Flachsenkung</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="196"/>
      <source>Hole norm</source>
      <translation>Bohrungs-Norm</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="202"/>
      <source>Custom dimensions</source>
      <translation>Benutzerdefinierte Maße</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="218"/>
      <source>Tolerance</source>
      <translation>Toleranz</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="249"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="368"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="474"/>
      <source>Diameter</source>
      <translation>Durchmesser</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="280"/>
      <source>Bolt/Washer</source>
      <translation>Unterlegescheibe</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="329"/>
      <location filename="../../../FeatureHole/TaskHole.ui" line="337"/>
      <source>Thread norm</source>
      <translation>Gewinde-Norm</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="399"/>
      <source> Custom thread length</source>
      <translation> Standard-Gewindelänge</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="423"/>
      <source>Finish depth</source>
      <translation>End-Tiefe</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="466"/>
      <source>Data</source>
      <translation>Daten</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="510"/>
      <source>Counterbore/sink dia</source>
      <translation>Durchmesser der Senkung</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="528"/>
      <source>Counterbore depth</source>
      <translation>Tiefe der Flachsenkung</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="546"/>
      <source>Countersink angle</source>
      <translation>Winkel einer kegelförmigen Senkung</translation>
    </message>
    <message>
      <location filename="../../../FeatureHole/TaskHole.ui" line="564"/>
      <source>Thread length</source>
      <translation>Gewindelänge</translation>
    </message>
  </context>
  <context>
    <name>TaskHoleParameters</name>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="20"/>
      <source>Task Hole Parameters</source>
      <translation>Bohrungsparameter</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="26"/>
      <source>&lt;b&gt;Threading and size&lt;/b&gt;</source>
      <translation>&lt;b&gt;Gewinde und Größe&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="39"/>
      <source>Profile</source>
      <translation>Profil</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="62"/>
      <source>Whether the hole gets a thread</source>
      <translation>Ob die Bohrung ein Gewinde bekommt</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="65"/>
      <source>Threaded</source>
      <translation>Mit Gewinde versehen</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="78"/>
      <source>Whether the hole gets a modelled thread</source>
      <translation>Ob die Bohrung ein modelliertes Gewinde bekommt</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="81"/>
      <source>Model Thread</source>
      <translation>Gewinde darstellen</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="91"/>
      <source>Live update of changes to the thread
Note that the calculation can take some time</source>
      <translation>Aktualisierung der Änderungen am Gewinde in Echtzeit.
Achtung, die Berechnung kann einige Zeit dauern!</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="95"/>
      <source>Update view</source>
      <translation>Ansicht aktualisieren</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="108"/>
      <source>Customize thread clearance</source>
      <translation>Gewindespiel anpassen</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="111"/>
      <source>Custom Thread</source>
      <translation>Benutzerdefiniertes Gewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="124"/>
      <location filename="../../TaskHoleParameters.ui" line="233"/>
      <source>Clearance</source>
      <translation>Spiel</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="137"/>
      <source>Custom Thread clearance value</source>
      <translation>Wert des Spiels für benutzerdefinierte Gewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="159"/>
      <source>Direction</source>
      <translation>Richtung</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="178"/>
      <source>Right hand</source>
      <translation>Rechtsgewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="194"/>
      <source>Left hand</source>
      <translation>Linksgewinde</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="210"/>
      <source>Size</source>
      <translation>Größe</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="246"/>
      <source>Hole clearance
Only available for holes without thread</source>
      <translation>Bohrungsspiel
Nur für Bohrungen ohne Gewinde verfügbar</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="251"/>
      <location filename="../../TaskHoleParameters.cpp" line="586"/>
      <source>Standard</source>
      <translation>Standard</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="256"/>
      <location filename="../../TaskHoleParameters.cpp" line="587"/>
      <location filename="../../TaskHoleParameters.cpp" line="598"/>
      <source>Close</source>
      <translation>Schließen</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="261"/>
      <location filename="../../TaskHoleParameters.cpp" line="588"/>
      <source>Wide</source>
      <translation>Weit</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="275"/>
      <source>Class</source>
      <translation>Klasse</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="288"/>
      <source>Tolerance class for threaded holes according to hole profile</source>
      <translation>Toleranzklasse für Gewindebohrungen entsprechend dem Lochprofil</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="301"/>
      <location filename="../../TaskHoleParameters.ui" line="488"/>
      <source>Diameter</source>
      <translation>Durchmesser</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="314"/>
      <source>Hole diameter</source>
      <translation>Bohrungsdurchmesser</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="336"/>
      <location filename="../../TaskHoleParameters.ui" line="526"/>
      <source>Depth</source>
      <translation>Tiefe</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="350"/>
      <location filename="../../TaskHoleParameters.ui" line="404"/>
      <source>Dimension</source>
      <translation>Abmessung</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="355"/>
      <source>Through all</source>
      <translation>Durch alles</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="385"/>
      <source>Thread Depth</source>
      <translation>Gewindetiefe</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="399"/>
      <source>Hole depth</source>
      <translation>Bohrungstiefe</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="409"/>
      <source>Tapped (DIN76)</source>
      <translation>Gewindebohrung (DIN76)</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="433"/>
      <source>&lt;b&gt;Hole cut&lt;/b&gt;</source>
      <translation>&lt;b&gt;Bohrloch&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="446"/>
      <location filename="../../TaskHoleParameters.ui" line="609"/>
      <source>Type</source>
      <translation>Typ</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="459"/>
      <source>Cut type for screw heads</source>
      <translation>Art der Senkung für Schraubenköpfe</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="472"/>
      <source>Check to override the values predefined by the 'Type'</source>
      <translation>Auswählen, um die vom "Typ" festgelegten Standartwerte zu überschreiben</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="475"/>
      <source>Custom values</source>
      <translation>Benutzerdefinierte Werte</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="561"/>
      <source>Countersink angle</source>
      <translation>Winkel einer kegelförmigen Senkung</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="593"/>
      <source>&lt;b&gt;Drill point&lt;/b&gt;</source>
      <translation>&lt;b&gt;Bohrspitze&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="625"/>
      <source>Flat</source>
      <translation>Flach</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="641"/>
      <source>Angled</source>
      <translation>Winkelig</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="676"/>
      <source>The size of the drill point will be taken into
account for the depth of blind holes</source>
      <translation>Die Größe der Bohrspitze wird für die Tiefe der Sackbohrung mit berücksichtigt</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="680"/>
      <source>Take into account for depth</source>
      <translation>Für die Tiefe berücksichtigen</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="687"/>
      <source>&lt;b&gt;Misc&lt;/b&gt;</source>
      <translation>&lt;b&gt;Sonstiges&lt;/b&gt;</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="700"/>
      <source>Tapered</source>
      <translation>Kegelförmig</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="713"/>
      <source>Taper angle for the hole
90 degree: straight hole
under 90: smaller hole radius at the bottom
over 90: larger hole radius at the bottom</source>
      <translation>Kegelwinkel für die Bohrung
90 Grad: gerade Bohrung
unter 90: kleinerer Bohrungsradius an der Unterseite
über 90: größerer Bohrungsradius an der Unterseite</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="738"/>
      <source>Reverses the hole direction</source>
      <translation>Kehrt die Bohrungsrichtung um</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.ui" line="741"/>
      <source>Reversed</source>
      <translation>Umgekehrt</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="597"/>
      <source>Normal</source>
      <translation>Normal</translation>
    </message>
    <message>
      <location filename="../../TaskHoleParameters.cpp" line="599"/>
      <source>Loose</source>
      <translation>Ungebunden</translation>
    </message>
  </context>
  <context>
    <name>TaskTransformedMessages</name>
    <message>
      <location filename="../../TaskTransformedMessages.ui" line="14"/>
      <source>Form</source>
      <translation>Form</translation>
    </message>
    <message>
      <location filename="../../TaskTransformedMessages.ui" line="25"/>
      <source>No message</source>
      <translation>Keine Meldung</translation>
    </message>
  </context>
  <context>
    <name>WizardShaft</name>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="186"/>
      <location filename="../../../WizardShaft/WizardShaft.py" line="211"/>
      <source>Shaft design wizard...</source>
      <translation>Entwurfsassistent für Wellen...</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaft.py" line="187"/>
      <location filename="../../../WizardShaft/WizardShaft.py" line="212"/>
      <source>Start the shaft design wizard</source>
      <translation>Entwurfsassistent für Wellen starten</translation>
    </message>
  </context>
  <context>
    <name>WizardShaftTable</name>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="43"/>
      <source>Length [mm]</source>
      <translation>Länge [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="44"/>
      <source>Diameter [mm]</source>
      <translation>Durchmesser [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="45"/>
      <source>Inner diameter [mm]</source>
      <translation>Innendurchmesser [mm]</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="46"/>
      <source>Constraint type</source>
      <translation>Beziehungstyp</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="47"/>
      <source>Start edge type</source>
      <translation>Art der Anfangskante</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="48"/>
      <source>Start edge size</source>
      <translation>Größe der Anfangskante</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="49"/>
      <source>End edge type</source>
      <translation>Art der Endkante</translation>
    </message>
    <message>
      <location filename="../../../WizardShaft/WizardShaftTable.py" line="53"/>
      <source>End edge size</source>
      <translation>Größe der Endkante</translation>
    </message>
  </context>
  <context>
    <name>Workbench</name>
    <message>
      <location filename="../../Workbench.cpp" line="43"/>
      <source>&amp;Sketch</source>
      <translation>&amp;Skizze</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="45"/>
      <source>&amp;Part Design</source>
      <translation>&amp;Part Design</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="46"/>
      <source>Create a datum</source>
      <translation>Bezugselement erstellen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="47"/>
      <source>Create an additive feature</source>
      <translation>Objekte hinzufügen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="48"/>
      <source>Create a subtractive feature</source>
      <translation>Objekte abziehen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="49"/>
      <source>Apply a pattern</source>
      <translation>Muster anwenden</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="50"/>
      <source>Apply a dress-up feature</source>
      <translation>Modifikationen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="51"/>
      <source>Sprocket...</source>
      <translation>Kettenrad...</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="52"/>
      <source>Involute gear...</source>
      <translation>Evolventenrad...</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="53"/>
      <source>Shaft design wizard</source>
      <translation>Entwurfsassistent für Wellen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="58"/>
      <source>Measure</source>
      <translation>Messen</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="59"/>
      <source>Refresh</source>
      <translation>Aktualisieren</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="60"/>
      <source>Toggle 3D</source>
      <translation>3D umschalten</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="61"/>
      <source>Part Design Helper</source>
      <translation>Part Design - Helfer</translation>
    </message>
    <message>
      <location filename="../../Workbench.cpp" line="62"/>
      <source>Part Design Modeling</source>
      <translation>Part Design - Modellierung</translation>
    </message>
  </context>
</TS>
