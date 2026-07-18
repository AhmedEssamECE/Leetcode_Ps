# Write your MySQL query statement below
select max(num) as num
from (
    select num,count(num) as apperance 
    from MyNumbers
    group by num
    having apperance=1
) as Num