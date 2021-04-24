class SportData {
    constructor(data){
        if(data.football){
        let football = []
        for(let i = 0; i < data["football"].length; i++){
            football.push(data["football"][i])
        }
        this.football = football
    }
    if(data["cricket"]){
        let cricket = []
        for(let i = 0; i < data["cricket"].length; i++){
            cricket.push(data["cricket"][i])
        }
        this.cricket = cricket
    }
    if(data["golf"]){
        let golf = []
        for(let i = 0; i < data["golf"].length; i++){
            golf.push(data["golf"][i])
        }
        this.golf = golf
    }
    }
}
module.exports = SportData