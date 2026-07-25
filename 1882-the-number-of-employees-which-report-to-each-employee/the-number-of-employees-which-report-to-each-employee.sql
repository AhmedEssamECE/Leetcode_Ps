-- Write your PostgreSQL query statement below
select m.employee_id,m.name,COUNT(DISTINCT(e.employee_id)) as reports_count ,ROUND(AVG(e.age)) as average_age
from Employees  e
join Employees  m
on e.reports_to=m.employee_id
group by 1,2
order by m.employee_id