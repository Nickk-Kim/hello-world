import xlsxwriter

title_list = ["웹기술", "빅데이터기술"]
hit_count_list = [2000, 10000]

workbook = xlsxwriter.Workbook('ITArticleReport.xlsx')
worksheet = workbook.add_worksheet( )
worksheet.set_column(0, 0 , 5)
worksheet.set_column(1, 1, 80)

cell_format = workbook.add_format({'bold':True, 'align':'center', 'fg_color': '#01579B', 'color': 'white', 'border':1})
worksheet.write(1, 1, '타이틀', cell_format)
worksheet.write(1, 2, '클릭수', cell_format)
cell_format_gray = workbook.add_format({'fg_color': '#ECEFF1', 'border':1} )

for num in range(len(title_list)):
	worksheet.write(num+2, 1, title_list[num], cell_format_gray)
	worksheet.write(num+2, 2, hit_count_list[num], cell_format_gray)
	
workbook.close()
