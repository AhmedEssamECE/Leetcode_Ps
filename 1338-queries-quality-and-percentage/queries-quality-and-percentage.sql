# Write your MySQL query statement below
select query_name ,
Round(Avg(rating/position ),2) as quality 

 ,Round(Avg(Case when rating<3 then 1 else 0 end)*100,2) as poor_query_percentage
from Queries 

group by query_name 
