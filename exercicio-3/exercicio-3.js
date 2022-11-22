const fs = require('fs');
const { maxHeaderSize } = require('http');


fs.readFile('./dados.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Erro abrindo arquivo: ${err}`);
    } else {
        const table = JSON.parse(data);
        let min_value = Infinity;
        let max_value = -Infinity;
        let day_count = 0;
        let above_average_day_count = 0;
        let sum = 0;
        let average = 0;

        table.forEach(day => {
            if (day.valor != 0)
            {
                if (day.valor > max_value) max_value = day.valor;
                if (day.valor < min_value) min_value = day.valor;
                sum += day.valor;
                ++day_count;
            }
        })

        average = sum / day_count;

        table.forEach(day => {
            if (day.valor > average)
            {
                ++above_average_day_count;
            }
        })

        console.log(`Menor valor: ${min_value}`);
        console.log(`Maior valor: ${max_value}`);
        console.log(`Número de dias no mês com valor superior à média: ${above_average_day_count}`)
    }
})