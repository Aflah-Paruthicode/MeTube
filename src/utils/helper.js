const names = [
    'Aflah','Muhsin','Fawas','Anees','Shahid','Pranav','Hashif','Mridhul','Nidhin','Sharhan','Rishal','Devika','Ashique',
    'Amar','Ashikk','Siddique','Rasna','Akshay','Govind',"Hanish",'KrishnaDev','Vipin Raj','Hashir','Jasim','Jaseel','Hisham Paloli'
]


export function generateRandomNames() {
    return names[Math.floor(Math.random() * names.length)]
}