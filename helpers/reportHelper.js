import puppeteer from 'puppeteer';
import fs from 'fs';
import hbs from 'handlebars';
import path from 'path';

class ReportHelper {

    async exportPdf(reportName, reportTemplate, data) {

        try {
            const borwser = await puppeteer.launch({args: ['--no-sandbox']});
            const page = await borwser.newPage();
            const content = await this.compileHbs(reportTemplate, data);

            await page.setContent(content);
            await page.emulateMediaType('screen');

            let fileName = `${reportName}_` + Date.now();

            const pdf = await page.pdf({
                format: "a4",
                printBackground: true
            });


            await fs.writeFileSync('reports/'+fileName+'.pdf',pdf,'binary')

            return '/reports'+fileName;

        } catch (error) {
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
