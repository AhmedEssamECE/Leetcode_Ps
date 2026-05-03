-- # Write your MySQL query statement below
SELECT (e.salary)as Salary ,e.name as Employee,d.name as Department  FROM Employee e
JOIN Department d on e.departmentId=d.id
where (e.departmentId,e.salary) in (
    select departmentId,max(salary) from Employee

    group by departmentId

)
