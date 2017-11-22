import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('weight-loggings App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should has 5 initial data', () => {
    browser.get('/dashboard');
    let data = element.all(by.tagName('tr'));
    expect(data.count()).toEqual(7);
  });

  it('should able to add new weight', () => {
    browser.get('/dashboard');
    let newWeight = element(by.xpath('/html/body/app-root/app-root/a'));
    newWeight.click();
    expect(browser.getCurrentUrl()).toContain('/editor/new');
  });
  it('should able to insert new weight', () => {
    let newDate = element(by.xpath('/html/body/app-root/app-editor/div/div[2]/label[1]/ng-datepicker/div/input'));
    let newMin = element(by.xpath('/html/body/app-root/app-editor/div/div[2]/label[2]/input'));
    let newMax = element(by.xpath('/html/body/app-root/app-editor/div/div[2]/label[3]/input'));
    newDate.click();
    element(by.xpath('/html/body/app-root/app-editor/div/div[2]/label[1]/ng-datepicker/div/div/div[2]/div[2]/span[18]')).click();
    newMin.click();
    newMin.sendKeys('5');
    newMax.sendKeys('5');
    element(by.xpath('/html/body/app-root/app-editor/div/button[1]')).click();
    expect(browser.getCurrentUrl()).toContain('/dashboard');

    let data = element.all(by.tagName('tr'));
    expect(data.count()).toEqual(8);

    data = element.all(by.xpath('/html/body/app-root/app-root/div/div/table/tbody/tr[7]/td[1]'));
    expect(data.getText()).toEqual(['9.166666666666666']);

    data = element.all(by.xpath('/html/body/app-root/app-root/div/div/table/tbody/tr[7]/td[2]'));
    expect(data.getText()).toEqual(['42.5']);

    data = element.all(by.xpath('/html/body/app-root/app-root/div/div/table/tbody/tr[7]/td[3]'));
    expect(data.getText()).toEqual(['33.333333333333336']);
  });
  it('should able to view', () => {
    element(by.xpath('/html/body/app-root/app-root/div/div/table/tbody/tr[6]/td[4]/a[1]')).click();
    expect(browser.getCurrentUrl()).toContain('/detail/6');
    expect(
      element(by.xpath('/html/body/app-root/app-weight-detail/div/div/table/tbody/tr[1]/td[2]')).getText()
    ).toEqual('2017-11-15');
    expect(
      element(by.xpath('/html/body/app-root/app-weight-detail/div/div/table/tbody/tr[2]/td[2]')).getText()
    ).toEqual('5');
    expect(
      element(by.xpath('/html/body/app-root/app-weight-detail/div/div/table/tbody/tr[3]/td[2]')).getText()
    ).toEqual('5');
    expect(
      element(by.xpath('/html/body/app-root/app-weight-detail/div/div/table/tbody/tr[4]/td[2]')).getText()
    ).toEqual('0');
  });
});
