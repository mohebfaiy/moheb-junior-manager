function show(id){document.querySelectorAll('.page').forEach(p=>p.classList.add('hidden'));document.getElementById(id).classList.remove('hidden')}
function processInbox(){document.getElementById('result').innerText=`Erkannt:
• Standort: 2252
• Aufgabe: 2 Säcke Reis prüfen
• Fällig: morgen
• Priorität: hoch
• Person: Alex
• Standort von Alex: 4499
• Aktion: Antwort auf Englisch vorbereiten

Vorschlag:
Hi Alex, thank you for the information. I will check it and get back to you as soon as possible.`}