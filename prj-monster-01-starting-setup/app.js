function getRandomValue(min, max){
    return Math.floor(Math.random() * (max-min)+min);
}

const app = Vue.createApp({
    data(){
        return{
            playerHealth: 100,
            monsterHealth: 100,
            currentRound:0,
            winner: null,
            logMessages: []
        };
    },
    // Actions = Methods
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(5,12);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'attack', attackValue)
            this.attackPlayer();
            this.addLogMessage('monster', 'attack', attackValue)
        },
        attackPlayer(){
            const attackValue = getRandomValue(8,15);
            this.playerHealth -= attackValue;
            this.addLogMessage('monster', 'attack', attackValue)
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = getRandomValue(10,25);
            this.monsterHealth = this.monsterHealth - attackValue;
            this.addLogMessage('player', 'Special attack', attackValue)
            this.attackPlayer();
            this.addLogMessage('monster', 'attack', attackValue)
        },
        healPlayer(){
            console.log("calling heal ! =")
            this.currentRound++;
            const healValue = getRandomValue(8,20);
            
            if (this.playerHealth + healValue > 100){
                this.playerHealth = 100
            }else{
                this.playerHealth += healValue;
            }
            this.addLogMessage('player', 'heal', healValue)
            this.attackPlayer();
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.winner = null;
            this.currentRound = 0;
            this.logMessages = []
        },
        surrender(){
            this.winner= 'monster';
        },
        addLogMessage(who, what, value){
            this.logMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }
    },
    computed:{
        monsterBarStyles(){
            if (this.monsterHealth<0) {
                return {width: '0%'}
            }
            return {width: this.monsterHealth+'%'}
        },
        playerBarStyles(){
            if (this.playerHealth<0) {
                return {width:'0%'}
            }
            return {width: this.playerHealth+'%'}
        },
        canUseSpecialAttack(){
            return this.currentRound % 3 !== 0
        }
    },
    watch:{
        playerHealth(value){
            if (value <= 0 && this.monsterHealth <= 0){
                //Draw
                this.winner = 'draw';
            }else if (value <= 0){
                // PLayer Lost
                this.winner = 'monster';
            }
        },
        monsterHealth(value){
            if (value <= 0 && this.playerHealth <=0){
                //Draw
                this.winner = 'draw';
            }else if (value <= 0){
                //Monster Lost
                this.winner = 'player';
            }
        }
    }
});

app.mount('#game');