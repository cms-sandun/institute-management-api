import puppeteer from 'puppeteer';
import fs from 'fs';
import hbs from 'handlebars';
import path from 'path';

class ReportHelper {

    async exportPdf(reportName, reportTemplate, data) {
        try {
            console.log(data)
            const borwser = await puppeteer.launch({args: ['--no-sandbox']});
            const page = await borwser.newPage();
            const content = await this.compileHbs(reportTemplate, data);

            await page.setContent(content, {
                waitUntil: ["load","networkidle0"]
            });

            await page.emulateMediaType('screen');

            let fileName = `${reportName}_` + Date.now();
            let filePath = 'reports/'+fileName+'.pdf';

            const pdf = await page.pdf({
                format: "a4",
                printBackground: true
            });


            await fs.writeFileSync(filePath,pdf,'binary')

            return ''+filePath;

        } catch (error) {
            console.log(error)
            return error;
        }
    }

    async compileHbs(templateName, data) {
        const filePath = path.join(process.cwd(), 'html-templates', `${templateName}.hbs`);
        const html = await fs.readFileSync(filePath, 'utf-8');
        return hbs.compile(html)(data);
    }
}

const reportHelper = new ReportHelper();
export default reportHelper;
