let mover = {
    getDirection() {
        const availableDirections = [1, 2, 3, 4, 6, 7, 8, 9];
        while (true) {
            let direction = parseInt(prompt('Введите число (2, 4, 6, 8), куда вы хотите переместиться, "Отмена" для выхода.'));
            if(isNaN(direction)) {
                return null;
            }
            if(!availableDirections.includes(direction)) {
                alert('Для перемещения необходимо ввести одно из чисел 2, 4, 6, 8.');
                continue;
            }
            return direction;
        }
    }, 

    getNextPosition(direction) {
        const nextPosition = {
            x: player.x,
            y: player.y
        };
        switch (direction) {
            case 1: 
                nextPosition.x--;
                nextPosition.y++;
                break;
            case 2: 
                nextPosition.y++;
                break;
            case 3: 
                nextPosition.y++;
                nextPosition.x++;
                break;
            case 4: 
                nextPosition.x--;
                break;
            case 6:
                nextPosition.x++;
                break;
            case 7: 
                nextPosition.x--;
                nextPosition.y--;
                break;
            case 8:
                nextPosition.y--;
                break;
            case 9: 
                nextPosition.x++;
                nextPosition.y--;
                break;
        } 
        return nextPosition;  
    }
};