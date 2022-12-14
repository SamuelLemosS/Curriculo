Parse.serverURL = 'https://parseapi.back4app.com'; // This is your Server URL
// Remember to inform BOTH the Back4App Application ID AND the JavaScript KEY
Parse.initialize(
  'pk0XIUj9JmSURGeNeSK2xPjLWHPif8HyFrMknFB6', // This is your Application ID
  'c7fIRcE1AvqJYwbbE5ZcCm7YeFhECUcnF4AAGXT6', // This is your Javascript key
  '4LZCBMRxVJ13asaohffs2tQAUBpyYm8zXIw7Ftyv' // This is your Master key (never use it in the frontend)
);

const Curriculo = Parse.Object.extend("Curriculo");
const formacaoHtml = document.getElementById("formacao");
const conhecimentoHtml = document.getElementById("conhecimento");
const attHml = document.getElementById("att");
const hobbiesHtml = document.getElementById("hobbies");

const mostrarInfo = async () => {
  const query = new Parse.Query(Curriculo);
  try {
    const results = await query.find();
    console.log(results)
    for (const bancoDados of results) {
      const formacaoBD = bancoDados.get("formacao");
      const conhecimentoBD = bancoDados.get("conhecimento");
      const attBD = bancoDados.get("att");
      const hobbiesBD = bancoDados.get("hobbies");
      formacaoHtml.innerHTML += `<p>${formacaoBD}</p>`;
      conhecimentoHtml.innerHTML += `<p>${conhecimentoBD}</p>`;
      attHml.innerHTML += `<p>${attBD}</p>`;
      hobbiesHtml.innerHTML += `<p>${hobbiesBD}</p>`;
    }
  } catch (error) {
    console.error("Error while fetching Tarefa", error);
  }
};

mostrarInfo(); 
