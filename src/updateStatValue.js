export default function updateStatValue(statName, valueToAdd) {
    fetch(`https://filtru.xyz/api/account/stats/update/${statName}/add/${valueToAdd}`)
    .then((response) => response.json())
    .then((res) => {
        console.log(res)
        return res
    });
}