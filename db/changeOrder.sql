UPDATE favorites
SET ORDER = ${position}
WHERE rest_id = ${rest_id}
AND user_id = ${id}