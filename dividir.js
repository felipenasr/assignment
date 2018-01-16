let vet = [
    {"id":1, "mediaCompor": 3, "mediaTec": 14, "nota":31},
    {"id":2, "mediaCompor": 3, "mediaTec": 12, "nota":3},
    {"id":3, "mediaCompor": 3, "mediaTec": 22, "nota":23},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},
    {"id":4, "mediaCompor": 3, "mediaTec": 45, "nota":33},

]
// {"name":1, "alunos":[]}
var grupo1={"name":1, "alunos":[]};
var grupo2={"name":2, "alunos":[]};
var grupo3={"name":3, "alunos":[]};
var grupo4={"name":4, "alunos":[]};

let grupos = [

    grupo1,
    grupo2,
    grupo3,
    grupo4

]

var vetresultado=[];
var soma = 0;

function mediaF(vet){
    
    for (i =0; i<vet.length; i++){
        var media = vet[i]["mediaCompor"] + vet[i]["mediaTec"] + vet[i]["nota"]
        media = media/3

            aluno = {
                "id":vet[i]["id"],
                "media": media
            }
        vetresultado.push(aluno);
        vetresultado.sort(function(a, b) { 
        
            return (a.media - b.media) ; 
        });
    }
    console.log(vetresultado);
}

function dividir(vetor) {
    let i = 0;
    while(i < vetor.length) {
        for(let j = 0; j<=4; j++) {
            grupos[j]["alunos"].push(vetor[i].name);
            grupos[j]["alunos"].push(vetor[i].alunos);
            i++;
        }
    }
    console.log(grupos)
}

mediaF(vet);
dividir(vetresultado);