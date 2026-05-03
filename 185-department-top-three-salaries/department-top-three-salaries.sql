-- Write your PostgreSQL query statement below
Select   e.name AS Employee,
    d.name AS Department,
    e.salary AS Salary
from(
    select *, DENSE_RANK() OVER (
    PARTITION BY departmentId
    ORDER BY salary DESC) as DR
    from Employee 
    
) As e 



join Department d on e.departmentId=d.id
where DR<=3