
    function createConnection() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "1057020306",
            database: "calculator"
        });

        connection.connect(err => {
            if (err) {
                reject(err);
            } else {
                console.log("连接成功");
                resolve(connection);
            }
        });
    });
}

function insertResult(expression, result) {
    const connection = createConnection();
    try {
        const [rows] = connection.query("INSERT INTO results (expression, result) VALUES (?, ?)", [expression, result]);
        console.log("插入成功");
    } catch (err) {
        console.error("插入失败：", err);
    } finally {
        connection.end();
        console.log("关闭连接");
    }
}


function combinedFunction() {
    const connection = createConnection();
    try {
        const [rows] = connection.query("SELECT * FROM results ORDER BY id DESC LIMIT 10");
        for (const row of rows) {
            console.log(`表达式： ${row.expression}, 结果： ${row.result}`);
        }
    } catch (err) {
        console.error("查询失败：", err);
    } finally {
        connection.end();
        console.log("关闭连接");
    }
}


function calculation() {
    try {
        let opt_str = document.getElementById("result_num").value;
        let expression = document.getElementById("result_num").value;
        if (opt_str.includes('=')) {
            expression = opt_str.slice(0, opt_str.indexOf('='));
        }
        let result = eval(expression); // 使用eval函数进行计算
        document.getElementById("result_num").value = result;
        insertResult(expression, result);
    } catch (e) {
        console.log(`计算失败： ${e}`);
    }
}


function backspace() {
    var newStr = document.getElementById("result").value.slice(0, -1);
    document.getElementById("result").value = newStr;
}

function dot() {
    var result_num = document.getElementById("result").value;
    document.getElementById("result").value = result_num + '.';
}

function square() {
    var result = parseFloat(document.getElementById("result").value);
    document.getElementById("result").value = (result * result).toString();
}

function square_root() {
    var result = parseFloat(document.getElementById("result").value);
    try {
        var result = Math.sqrt(result);
        if (isNaN(result)) {
            throw new Error('Error:负数不能开方');
        }
        document.getElementById("result").value = result.toString();
    } catch (e) {
        document.getElementById("result").value = e.message;
    }
}


function clear() {
    document.getElementById("result").value = '';
}
class ZeroDivisi extends Error {
  constructor(message) {
    super(message);
    this.name = "ZeroDivisionError";
  }
}

function clickButton(btnText) {
    var resultNum = document.getElementById("result");
    var optStr = resultNum.value;
    if (btnText === '=') {
        try {
            var result = eval(optStr);
            resultNum.value = result.toString();
             if (resultNum.value === 'Infinity') {
                throw new Error('Error: 除数不能为0');
             }
        } catch (error) {
            if (resultNum.value === 'Infinity') {
                resultNum.value = "Error: 除数不能为0";
            } else {
                resultNum.value = "Error";
            }
        }
    }else if (btnText === '.') {
        dot();
    }else if (btnText === 'del') {
        backspace();
    }else if (btnText === 'square') {
        square();
    }else if (btnText === 'sqrt') {
        square_root();
    }else if (btnText === 'C') {
        clear();
    }else if (btnText === 'ans') {
        combinedFunction();
    }else {
        try {
            resultNum.value += btnText;
        } catch (error) {
            resultNum.value = "Error";
        }
    }
}
function calculateDepositInterest() {
            const amount = parseFloat(document.getElementById("amount").value);
            const duration = parseFloat(document.getElementById("duration").value);
            let interestRate;
            if (duration <= 0.25) {
                interestRate = 2.85;
            } else if (duration <= 0.5) {
                interestRate = 3.05;
            } else if (duration <= 1) {
                interestRate = 3.25;
            } else if (duration <= 2) {
                interestRate = 4.15;
            } else if (duration <= 3) {
                interestRate = 4.75;
            } else {
                interestRate = 5.25;
            }

            const result = amount * duration * interestRate / 100;
            document.getElementById("resultrate").value = result.toFixed(2);
        }

function calculateLoanInterest() {
            const amount = parseFloat(document.getElementById("amount").value);
            const duration = parseFloat(document.getElementById("duration").value);
            let interestRate;

            if (duration <= 0.5) {
                interestRate = 5.85;
            } else if (duration <= 1) {
                interestRate = 6.31;
            } else if (duration <= 3) {
                interestRate = 6.40;
            } else if (duration <= 5) {
                interestRate = 6.65;
            } else {
                interestRate = 6.80;
            }

            const result = amount * duration * interestRate / 100;
            document.getElementById("resultrate").value = result.toFixed(2);
        }
function calculateInterest() {
    const amount = parseFloat(document.getElementById("amount").value);
    const duration = parseFloat(document.getElementById("duration").value);
    let interestRate;
    interestRate = 0.5;
    const result = amount * duration * interestRate / 100;
    document.getElementById("resultrate").value = result.toFixed(2);
}
