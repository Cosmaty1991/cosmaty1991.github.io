module('Templating');

var actualNode = document.createElement('div'),
    expectedNode = document.createElement('div');

test('Entity', function() {
    actualNode.innerHTML = window.Templates.Entity({
        id: 1,
        name: 'Test 1',
        description: 'Test description 1',
        enabled: true
    });

    expectedNode.innerHTML =
    '<div class="entity enabled" data-id="1">' +
        '<p>Name: <span class="entity-name">Test 1</span></p>' +
        '<p>Description: <span class="description">Test description 1</span></p>' +
    '</div>';

    assertNodes(actualNode, expectedNode);

    actualNode.innerHTML = window.Templates.Entity({
        id: 2,
        name: '2 Test',
        description: '2 Test description',
        enabled: false
    });

    expectedNode.innerHTML =
    '<div class="entity disabled" data-id="2">' +
        '<p>Name: <span class="entity-name">2 Test</span></p>' +
        '<p>Description: <span class="description">2 Test description</span></p>' +
    '</div>';

    assertNodes(actualNode, expectedNode);
});

test('EntityList', function() {
    actualNode.innerHTML = window.Templates.EntityList({items: [
        {
            id: 1,
            name: 'Test 1',
            description: 'Test description 1',
            enabled: true
        },
        {
            id: 2,
            name: '2 Test',
            description: '2 Test description',
            enabled: false
        }
    ]});

    expectedNode.innerHTML =
    '<div class="entity-list">' +
        '<div class="entity enabled" data-id="1">' +
            '<p>Name: <span class="entity-name">Test 1</span></p>' +
            '<p>Description: <span class="description">Test description 1</span></p>' +
        '</div>' +

        '<div class="entity disabled" data-id="2">' +
            '<p>Name: <span class="entity-name">2 Test</span></p>' +
            '<p>Description: <span class="description">2 Test description</span></p>' +
        '</div>' +
    '</div>';

    assertNodes(actualNode, expectedNode);

    actualNode.innerHTML = window.Templates.EntityList({items: []});
    expectedNode.innerHTML =
    '<div class="entity-list">' +
        '<b>List is empty</b>' +
    '</div>';

    assertNodes(actualNode, expectedNode);
});

test('NestedLists', function() {
    actualNode.innerHTML = window.Templates.NestedLists.call({
        Key1: 'Value1',
        Key2: 'Value2',
        Key3: 'Value3'
    });

    expectedNode.innerHTML =
    '<ul>' +
    '<li>Key1: Value1</li>' +
    '<li>Key2: Value2</li>' +
    '<li>Key3: Value3</li>' +
    '</ul>';

    assertNodes(actualNode, expectedNode);

    actualNode.innerHTML = window.Templates.NestedLists.call({
        Key1: 'Value1',
        Key2: 'Value2',
        NestedList: {
            NestedKey1: 'NestedValue1',
            NestedKey2: 'NestedValue2'
        },
        Key3: 'Value3',
    });

    expectedNode.innerHTML =
    '<ul>' +
    '<li>Key1: Value1</li>' +
    '<li>Key2: Value2</li>' +
    '<li>NestedList: <ul>' +
        '<li>NestedKey1: NestedValue1</li>' +
        '<li>NestedKey2: NestedValue2</li>' +
    '</ul></li>' +
    '<li>Key3: Value3</li>' +
    '</ul>';

    assertNodes(actualNode, expectedNode);

    actualNode.innerHTML = window.Templates.NestedLists.call({
        AnotherNestedList: {
            AnotherNestedKey1: 'AnotherNestedValue1'
        },
        Key1: 'Value1',
        Key2: 'Value2',
        Key3: 'Value3',
        NestedList: {
            NestedKey1: 'NestedValue1',
            NestedKey2: 'NestedValue2',
            DeeplyNestedList: {
                DeeplyNestedKey1: 'DeeplyNestedValue1'
            }
        }
    });

    expectedNode.innerHTML =
    '<ul>' +

    '<li>AnotherNestedList: <ul>' +
        '<li>AnotherNestedKey1: AnotherNestedValue1</li>' +
    '</ul></li>' +

    '<li>Key1: Value1</li>' +
    '<li>Key2: Value2</li>' +
    '<li>Key3: Value3</li>' +

    '<li>NestedList: <ul>' +
        '<li>NestedKey1: NestedValue1</li>' +
        '<li>NestedKey2: NestedValue2</li>' +
        '<li>DeeplyNestedList: <ul>' +
            '<li>DeeplyNestedKey1: DeeplyNestedValue1</li>' +
        '</ul></li>' +
    '</ul></li>' +
    '</ul>';
});

function assertNodes(actual, expected) {
    equal(actual.tagName, expected.tagName);
    equal(actual.className, expected.className);
    equal(actual.children.length, expected.children.length);
    equal(actual.getAttribute('data-id'), expected.getAttribute('data-id'));

    if (expected.children.length == 0) {
        equal(actual.innerHTML, expected.innerHTML);
    } else {
        for (var i = 0; i < expected.children.length; i++) {
            assertNodes(actual.children[i], expected.children[i]);
        }
    }
}